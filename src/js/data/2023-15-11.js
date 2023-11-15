dataSetVersion = "2019-08-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Band",
    key: "bands",
    tooltip: "Check this to restrict to certain bands.",
    checked: false,
    sub: [
      { name: "MyGo!!!!!", key: "mygo" },
      { name: "AveMujica", key: "ave" },
      { name: "CryChic", key: "cryc" }
    ]
  }
];
dataSet[dataSetVersion].characterData = [
  {
    name: "Tomori Takamatsu",
    img: "Tomori.png",
    opts: {
      groups: ["mygo","cryc"]
    }
  },
    {
    name: "Nagasaki Soyo",
    img: "Soyo.png",
    opts: {
      groups: ["mygo","cryc"]
    }
  },
      {
    name: "Chihaya Anon",
    img: "Anon.png",
    opts: {
      groups: ["mygo"]
    }
  },
      {
    name: "Kaname Raana",
    img: "Raana.png",
    opts: {
      groups: ["mygo"]
    }
  },
      {
    name: "Shiina Taki",
    img: "Taki.png",
    opts: {
      groups: ["mygo","cryc"]
    }
  },
        {
    name: "Misumi Uika",
    img: "Uika.png",
    opts: {
      groups: ["ave"]
    }
  },
          {
    name: "Yahata Umiri",
    img: "Umiri.png",
    opts: {
      groups: ["ave"]
    }
  },
          {
    name: "Wakaba Mutsumi",
    img: "Mutsumi.png",
    opts: {
      groups: ["ave","cryc"]
    }
  },
            {
    name: "Togawa Sakiko",
    img: "Sakiko.png",
    opts: {
      groups: ["ave","cryc"]
    }
  },
            {
    name: "Yuutenji Nyamu",
    img: "Nyamu.png",
    opts: {
      groups: ["ave"]
    }
  },
              {
    name: "Oblivionis",
    img: "Oblivionis.png",
    opts: {
      groups: ["ave"]
    }
  },
                {
    name: "Doloris",
    img: "Doloris.png",
    opts: {
      groups: ["ave"]
    }
  },
                {
    name: "Amoris",
    img: "Amoris.png",
    opts: {
      groups: ["ave"]
    }
  },
                {
    name: "Mortis",
    img: "Mortis.png",
    opts: {
      groups: ["ave"]
    }
  },
                {
    name: "Timoris",
    img: "Timoris.png",
    opts: {
      groups: ["ave"]
    }
  }
]
