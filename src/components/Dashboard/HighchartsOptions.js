const options = [
  {
    id: 0,
    chart: {
      type: "area",
    },
    credits: false,
    legend: {
      enabled: true,
    },
    title: {
      text: "בדיקות שהתבצעו אתמול",
      // style: {
      //   color: "red",
      //   fontSize:"25px",
      // },
    },
    series: [
      {
        name: "1",
        data: [50, 30, 40, 70, 20],
      },
      {
        name: "2",
        data: [20, -20, -30, 20, 10],
      },
      {
        name: "3",
        data: [30, 40, 40, -20, 50],
      },
    ],
    xAxis: {
      categories: ["מורים", "אנשי ניקיון", "הנהלה", "תלמידים", "הורים מבקרים"],
      labels: {
        style: {
          color: "black",
        },
      },
    },
  },
  // {
  //   id: 0,
  //   chart: {
  //     type: "area",
  //   },
  //   legend: {
  //     enabled: true
  // },
  //   title: {
  //     text: "בדיקות שהתבצעו אתמול",
  //   },
  //   series: [
  //     {
  //       name: "1",
  //       data: [50, 30, 40, 70, 20],
  //     },
  //     {
  //       name: "2",
  //       data: [20, -20, -30, 20, 10],
  //     },
  //     {
  //       name: "3",
  //       data: [30, 40, 40, -20, 50],
  //     },
  //   ],
  //   xAxis: {
  //     categories: ["מורים", "אנשי ניקיון", "הנהלה", "תלמידים", "הורים מבקרים"],
  //   },
  // },

  {
    id: 1,
    chart: {
      type: "line",
    },
    title: {
      text: "החלימו עד כה",
    },
    series: [
      {
        name: "1",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "2",
        data: [2, -2, -3, 2, 1],
      },
      {
        name: "3",
        data: [3, 4, 4, -2, 5],
      },
    ],
    legend: {
      // display:true,
      position: "right",
    },
    xAxis: {
      categories: ["מורים", "אנשי ניקיון", "הנהלה", "תלמידים", "הורים מבקרים"],
      labels: {
        style: {
          color: "black",
        },
      },
    },
  },

  {
    id: 2,
    chart: {
      type: "area",
    },
    title: {
      style: {
        color: "black",
      },
      text: "נפטרים מצטבר",
    },
    series: [
      {
        name: "USA",
        data: [
          null,
          null,
          null,
          null,
          null,
          6,
          11,
          32,
          110,
          235,
          369,
          640,
          1005,
          1436,
          2063,
          3057,
          4618,
          6444,
          9822,
          15468,
          20434,
          24126,
          27387,
          29459,
          31056,
          31982,
          32040,
          31233,
          29224,
          27342,
          26662,
          26956,
          27912,
          28999,
          28965,
          27826,
          25579,
          25722,
          24826,
          24605,
          24304,
          23464,
          23708,
          24099,
          24357,
          24237,
          24401,
          24344,
          23586,
          22380,
          21004,
          17287,
          14747,
          13076,
          12555,
          12144,
          11009,
          10950,
          10871,
          10824,
          10577,
          10527,
          10475,
          10421,
          10358,
          10295,
          10104,
          9914,
          9620,
          9326,
          5113,
          5113,
          4954,
          4804,
          4761,
          4717,
          4368,
          4018,
        ],
      },
      {
        name: "USSR/Russia",
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          5,
          25,
          50,
          120,
          150,
          200,
          426,
          660,
          869,
          1060,
          1605,
          2471,
          3322,
          4238,
          5221,
          6129,
          7089,
          8339,
          9399,
          10538,
          11643,
          13092,
          14478,
          15915,
          17385,
          19055,
          21205,
          23044,
          25393,
          27935,
          30062,
          32049,
          33952,
          35804,
          37431,
          39197,
          45000,
          43000,
          41000,
          39000,
          37000,
          35000,
          33000,
          31000,
          29000,
          27000,
          25000,
          24000,
          23000,
          22000,
          21000,
          20000,
          19000,
          18000,
          18000,
          17000,
          16000,
          15537,
          14162,
          12787,
          12600,
          11400,
          5500,
          4512,
          4502,
          4502,
          4500,
          4500,
        ],
      },
    ],
  },
  {
    id: 3,
    chart: {
      type: "line",
    },
    credits: {
      enabled: false,
    },
    title: {
      style: {
        color: "black",
      },
      text: 'מדד מחזור העסקים באיו"ש וברצ"ע',
    },
    subtitle: {
      text: "מדד מחזור העסקים החודשי, מרץ 2018 עד מרץ 2020",
    },
    xAxis: {
      categories: [
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר",
        "ינואר",
        "פברואר",
        "מרץ",
        "אפריל",
        "יוני",
        "יולי",
      ],
      labels: {
        enabled: true,
        style: {
          color: "black",
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: "black",
          fontSize: "25px",
        },
      },
      title: {
        style: {
          color: "black",
          fontSize: "20px",
        },
        text: "Temperature (°C)",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "רצ״ע",
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      },
      {
        name: "איו״ש",
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
      },
    ],
  },

  {
    id: 4,
    chart: {
      type: "pie",
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: true,
    },
    title: {
      style: {
        color: "black",
      },
      text: "Countries compared by population density and total area.",
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Area (square km): <b>{point.y}</b><br/>" +
        "Population density (people per square km): <b>{point.z}</b><br/>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "20%",
        zMin: 0,
        name: "countries",
        data: [
          {
            name: "Spain",
            y: 505370,
            color: "red",
          },
          {
            name: "France",
            y: 551500,
          },
          {
            name: "Poland",
            y: 312685,
          },
          {
            name: "Czech Republic",
            y: 78867,
          },
          {
            name: "Italy",
            y: 301340,
          },
          {
            name: "Switzerland",
            y: 41277,
          },
          {
            name: "Germany",
            y: 357022,
          },
        ],
      },
    ],
  },
];

export default options;
