const yearCurrent = String(new Date().getFullYear());

var profileData, skillsData
(async () => {
  const apiData = await fetchApiData()
  profileData = apiData.profile;
  updateProfile(profileData);
  skillsData = apiData.skills;
  //updateSkills(skillsData);
})()

function updateProfile(profileData) {
  const nameText = document.getElementById("profile.name.text");
  nameText.innerHTML = `${profileData.name}<br><span>${profileData.profession}</span>`;

  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;

  // TESTS
  //nameText.innerHTML = "John Doe<br><span>Creative Designer</span>";
  //photo.src = "images/img.png";

  const phoneLink = document.getElementById("profile.phone.link");
  phoneLink.href = `tel:${profileData.phone}`;
  const phoneText = document.getElementById("profile.phone.text");
  phoneText.innerHTML = profileData.phone;

  const emailLink = document.getElementById("profile.email.link");
  emailLink.href = `mailto:${profileData.email}`;
  const emailText = document.getElementById("profile.email.text");
  emailText.innerHTML = profileData.email;

  const siteLink = document.getElementById("profile.site.link");
  siteLink.href = `https://www.${profileData.site}`;
  const siteText = document.getElementById("profile.site.text");
  siteText.innerHTML = profileData.site;

  const linkedinLink = document.getElementById("profile.linkedin.link");
  linkedinLink.href = `https://www.${profileData.linkedin}`;
  const linkedinText = document.getElementById("profile.linkedin.text");
  linkedinText.innerHTML = profileData.linkedin;

  const githubLink = document.getElementById("profile.github.link");
  githubLink.href = `https://www.${profileData.github}`;
  const githubText = document.getElementById("profile.github.text");
  githubText.innerHTML = profileData.github;

  const locationText = document.getElementById("profile.location.text");
  locationText.innerHTML = profileData.location;

  const signatureLink = document.getElementById("signature.link");
  signatureLink.href = `https://www.${profileData.github}`;
}

function updateSkills(skillsData) {
  const skillsText = document.getElementById("skills.text");

  skillsText.innerHTML = skillsData.map(skill => {

    var finallyCertifications = '';

    const certifications = skill.certifications;
    if (certifications.length > 0) {
      const linkCertifications = certifications.map(certificate => {
        return `
          <a href="${certificate.link}" target="_blank">
            ✦ ${certificate.title}
          </a>
        `
      }).join('');

      finallyCertifications = `
        <div class="content skill-certifications" style="display:none;">
          <p>Certificações</p>
          <ul>
            <li>
              ${linkCertifications}
            </li>
          </ul>
        </div>
      `      
    }

    return `
      <section class="showhide">
        <a class="trigger"> 
          <div class="skills-box" style="--i:${skill.value};">
            <span class="icon"><i class="${skill.icon}"></i>
              <p>${skill.name}</p>
            </span>
            <div class="value"></div>
            ${finallyCertifications != '' ? "<i class='arrow fa-solid fa-chevron-up'></i>" : ''}
          </div>
        </a>
        ${finallyCertifications}
      </section>
    `
  }).join('');
}