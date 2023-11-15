dataSetVersion = "2023-15-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    ]
  }
];
dataSet[dataSetVersion].characterData = [
  {
    name: "Tomori Takamatsu",
    img: "Tomori.png",
    opts: {
      bands: ["mygo"]
    }
  },
    {
    name: "Nagasaki Soyo",
    img: "Soyo.png",
    opts: {
      bands: ["mygo"]
    }
  },
      {
    name: "Chihaya Anon",
    img: "Anon.png",
    opts: {
      bands: ["mygo"]
    }
  },
      {
    name: "Kaname Raana",
    img: "Raana.png",
    opts: {
      bands: ["mygo"]
    }
  },
      {
    name: "Shiina Taki",
    img: "Taki.png",
    opts: {
      bands: ["mygo"]
    }
  },
        {
    name: "Misumi Uika",
    img: "Uika.png",
    opts: {
      bands: ["ave"]
    }
  },
          {
    name: "Yahata Umiri",
    img: "Umiri.png",
    opts: {
      bands: ["ave"]
    }
  },
          {
    name: "Wakaba Mutsumi",
    img: "Mutsumi.png",
    opts: {
      bands: ["ave"]
    }
  },
            {
    name: "Togawa Sakiko",
    img: "Sakiko.png",
    opts: {
      bands: ["ave"]
    }
  },
            {
    name: "Yuutenji Nyamu",
    img: "Nyamu.png",
    opts: {
      bands: ["ave"]
    }
  },
              {
    name: "Oblivionis",
    img: "Oblivionis.png",
    opts: {
      bands: ["ave"]
    }
  },
                {
    name: "Doloris",
    img: "Doloris.png",
    opts: {
      bands: ["ave"]
    }
  },
                {
    name: "Amoris",
    img: "Amoris.png",
    opts: {
      bands: ["ave"]
    }
  },
                {
    name: "Mortis",
    img: "Mortis.png",
    opts: {
      bands: ["ave"]
    }
  },
                {
    name: "Timoris",
    img: "Timoris.png",
    opts: {
      bands: ["ave"]
    }
  }
];
