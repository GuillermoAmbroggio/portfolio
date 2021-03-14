export interface IWriting {
  menuTop: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    name: string;
    my: string;
    title1: string;
    title2: string;
  };
  about: {
    title: string;
    intro: string;
    subtitle: string;
    birthdayTitle: string;
    birthday: string;
    ageTitle: string;
    age: string;
    educationTitle: string;
    education: string;
    cityTitle: string;
    city: string;
    emailTitle: string;
    email: string;
    personalInfo: string;
  };
  skills: {
    title: string;
  };
  resume: {
    title: string;
    education: {
      1: {
        title: string;
        period: string;
        institution: string;
        description: string;
      };
      2: {
        title: string;
        period: string;
        institution: string;
      };
    };
    professionalExperiencie: {
      1: {
        title: string;
        period: string;
        institution: string;
        description: string;
      };
      2: {
        title: string;
        period: string;
        institution: string;
        description1: string;
        deescription2: string;
      };
    };
  };
  projects: {
    title: string;
  };
  contact: {
    title: string;
    location: {
      title: string;
      info: string;
    };
    email: {
      title: string;
      info: string;
    };
    linkedin: {
      title: string;
      info: string;
    };
  };
}
