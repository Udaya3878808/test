var xhr = new XMLHttpRequest();
xhr.open("GET", "./resume.json", true);
xhr.onload = function () {
  var o = JSON.parse(xhr.responseText);
  console.log(o);
  var basics = {
    name: "Udaya",
    label: "Mern Full Stack Developer",
    image: "",
    email: "Udaya13878808@gmail.com",
    phone: "9113788809",
    url: "https://udaya",
    summary: "A summary of Udaya..",
    location: {
      address: "2nd cross,pattalamma layout",
      postalCode: "560068",
      city: "Banglore",
      countryCode: "India",
      region: "Hindu",
    },
  };

  for (var key in basics) {
    console.log(key + ":" + basics[key]);
  }

  var volunteer = [
    {
      organization: "Organization",
      position: "Volunteer",
      url: "https://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description…",
      highlights: ["Awarded 'Volunteer of the Month'"],
    },
  ];

  for (var i = 0; i < volunteer.length; i++) {
    console.log("volunteer:", volunteer[i]);
  }
  var works = [
    {
      name: "First Source",
      position: "customer support",
      url: "https://company.com",
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      summary: "Description…",
      highlights: ["Started the company"],
    },
  ];

  for (var work of works) {
    console.log("work:", works);
  }

  var educations = [
    {
      institution: "University",
      url: "https://institution.com/",
      area: "BCA",
      studyType: "Bachelor",
      startDate: "2018-01-01",
      endDate: "2020-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
  ];
  educations.forEach((edu) => {
    console.log("educations:", edu);
  });
};
xhr.send();
