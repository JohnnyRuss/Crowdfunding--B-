export const header = {
  navRoutes: ["about", "discover", "get started"],
  fig: {
    desktop:"/assets/image-hero-desktop.jpg",
    mobile:"/assets/image-hero-mobile.jpg"
  },
};

export const mastercraftIntro = {
  title: "Mastercraft Bamboo Monitor Riser",
  description:
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
  fig: "/assets/logo-mastercraft.svg",
};

export const processBar = {
  backed: { done: "89,914", from: "100,000" },
  total: "5,007",
  daysLeft: "56",
};

export const about = {
  title: "About this project",
  p1: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
  p2: "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
  stands: [
    {
      id: "about-stand--1",
      disabled: false,
      title: "Bamboo Stand",
      offer: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: 101,
    },
    {
      id: "about-stand--2",
      disabled: false,
      title: "Black Edition Stand",
      offer: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 64,
    },
    {
      id: "about-stand--3",
      disabled: true,
      title: "Mahogany Special Edition",
      offer: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: 0,
    },
  ],
};

export const backToProjectModal = {
  title: "Back this project",
  description:
    "Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?",
  stands: [
    {
      id:"back-to--project__modal-1",
      disabled: false,
      title: "Pledge with no reward",
      offer: "",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: "",
    },
    ...about.stands,
  ],
};

export const success = {
  title: "Thanks for your support!",
  description:
    "Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.",
  fig: "/assets/icon-check.svg",
};
