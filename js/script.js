var items = [],
    municipios = [],
    chartData = [],
    chartData5 = [],
    chartData6 = [],
    ciudad1 = 0,
    colores = ["#76ff5f", "#ffab41", "#41fff1", "#ff55d5", "#291e72"];
var aglomeraciones = [
  {
    "name": "A-Armenia",
    "valor": "Aglomeración de Armenia",
    "valor2": "CO-QUI",
    "icm": 40,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 37,
    "pazterritorial": 37,
    "equidadeinclusion": 65,
    "gobernanzaparticipacioneinstituciones": 41,
    "cienciatecnologiaeinnovacion": 17,
    "productividadcompetitividadycomplementariedad": 44,
    "ranking": "20/56"
  },
  {
    "name": "A-Barranquilla",
    "valor": "Aglomeración de Barranquilla",
    "valor2": "CO-ATL",
    "icm": 44,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 42,
    "pazterritorial": 38,
    "equidadeinclusion": 53,
    "gobernanzaparticipacioneinstituciones": 59,
    "cienciatecnologiaeinnovacion": 17,
    "productividadcompetitividadycomplementariedad": 54,
    "ranking": "7/56"
  },
  {
    "name": "A-Bogota,D.C.",
    "valor": "Aglomeración de Bogotá",
    "valor2": "CO-DC",
    "icm": 61,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 61,
    "pazterritorial": 41,
    "equidadeinclusion": 72,
    "gobernanzaparticipacioneinstituciones": 54,
    "cienciatecnologiaeinnovacion": 64,
    "productividadcompetitividadycomplementariedad": 74,
    "ranking": "1/56"
  },
  {
    "name": "A-Bucaramanga",
    "valor": "Aglomeración de Bucaramanga",
    "valor2": "CO-SAN",
    "icm": 49,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 51,
    "pazterritorial": 37,
    "equidadeinclusion": 65,
    "gobernanzaparticipacioneinstituciones": 74,
    "cienciatecnologiaeinnovacion": 18,
    "productividadcompetitividadycomplementariedad": 51,
    "ranking": "3/56"
  },
  {
    "name": "A-Cali",
    "valor": "Aglomeración de Cali",
    "valor2": "CO-VAC",
    "icm": 49,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 49,
    "pazterritorial": 34,
    "equidadeinclusion": 63,
    "gobernanzaparticipacioneinstituciones": 57,
    "cienciatecnologiaeinnovacion": 31,
    "productividadcompetitividadycomplementariedad": 63,
    "ranking": "4/56"
  },
  {
    "name": "A-Cartagena",
    "valor": "Aglomeración de Cartagena",
    "valor2": "CO-BOL",
    "icm": 43,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 45,
    "pazterritorial": 38,
    "equidadeinclusion": 53,
    "gobernanzaparticipacioneinstituciones": 48,
    "cienciatecnologiaeinnovacion": 19,
    "productividadcompetitividadycomplementariedad": 54,
    "ranking": "15/56"
  },
  {
    "name": "A-Cucuta",
    "valor": "Aglomeración de Cúcuta",
    "valor2": "CO-NSA",
    "icm": 39,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 24,
    "pazterritorial": 24,
    "equidadeinclusion": 56,
    "gobernanzaparticipacioneinstituciones": 54,
    "cienciatecnologiaeinnovacion": 27,
    "productividadcompetitividadycomplementariedad": 47,
    "ranking": "27/56"
  },
  {
    "name": "A-Duitama",
    "valor": "Aglomeración de Duitama",
    "valor2": "CO-BPY",
    "icm": 44,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 42,
    "pazterritorial": 43,
    "equidadeinclusion": 70,
    "gobernanzaparticipacioneinstituciones": 46,
    "cienciatecnologiaeinnovacion": 17,
    "productividadcompetitividadycomplementariedad": 44,
    "ranking": "9/56"
  },
  {
    "name": "A-Girardot",
    "valor": "Aglomeración de Girardot",
    "valor2": "CO-TOL",
    "icm": 39,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 38,
    "pazterritorial": 35,
    "equidadeinclusion": 59,
    "gobernanzaparticipacioneinstituciones": 45,
    "cienciatecnologiaeinnovacion": 17,
    "productividadcompetitividadycomplementariedad": 38,
    "ranking": "25/56"
  },
  {
    "name": "A-Manizales",
    "valor": "Aglomeración de Manizales",
    "valor2": "CO-CAL",
    "icm": 44,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 31,
    "pazterritorial": 36,
    "equidadeinclusion": 72,
    "gobernanzaparticipacioneinstituciones": 51,
    "cienciatecnologiaeinnovacion": 29,
    "productividadcompetitividadycomplementariedad": 46,
    "ranking": "6/56"
  },
  {
    "name": "A-Medellin",
    "valor": "Aglomeración de Medellín",
    "valor2": "CO-ANT",
    "icm": 53,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 49,
    "pazterritorial": 36,
    "equidadeinclusion": 69,
    "gobernanzaparticipacioneinstituciones": 66,
    "cienciatecnologiaeinnovacion": 38,
    "productividadcompetitividadycomplementariedad": 60,
    "ranking": "2/56"
  },
  {
    "name": "A-Pasto",
    "valor": "Aglomeración de Pasto",
    "valor2": "CO-NAR",
    "icm": 43,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 49,
    "pazterritorial": 35,
    "equidadeinclusion": 64,
    "gobernanzaparticipacioneinstituciones": 45,
    "cienciatecnologiaeinnovacion": 20,
    "productividadcompetitividadycomplementariedad": 46,
    "ranking": "13/56"
  },
  {
    "name": "A-Pereira",
    "valor": "Aglomeración de Pereira",
    "valor2": "CO-RIS",
    "icm": 44,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 41,
    "pazterritorial": 35,
    "equidadeinclusion": 67,
    "gobernanzaparticipacioneinstituciones": 59,
    "cienciatecnologiaeinnovacion": 13,
    "productividadcompetitividadycomplementariedad": 48,
    "ranking": "8/56"
  },
  {
    "name": "A-Rionegro",
    "valor": "Aglomeración de Rionegro",
    "valor2": "CO-ATT",
    "icm": 43,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 50,
    "pazterritorial": 35,
    "equidadeinclusion": 68,
    "gobernanzaparticipacioneinstituciones": 46,
    "cienciatecnologiaeinnovacion": 18,
    "productividadcompetitividadycomplementariedad": 43,
    "ranking": "12/56"
  },
  {
    "name": "A-Sogamoso",
    "valor": "Aglomeración de Sogamoso",
    "valor2": "CO-BPP",
    "icm": 43,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 42,
    "pazterritorial": 41,
    "equidadeinclusion": 68,
    "gobernanzaparticipacioneinstituciones": 49,
    "cienciatecnologiaeinnovacion": 16,
    "productividadcompetitividadycomplementariedad": 41,
    "ranking": "14/56"
  },
  {
    "name": "A-Tulua",
    "valor": "Aglomeración de Tuluá",
    "valor2": "CO-VAA",
    "icm": 37,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 34,
    "pazterritorial": 34,
    "equidadeinclusion": 63,
    "gobernanzaparticipacioneinstituciones": 37,
    "cienciatecnologiaeinnovacion": 10,
    "productividadcompetitividadycomplementariedad": 45,
    "ranking": "34/56"
  },
  {
    "name": "A-Tunja",
    "valor": "Aglomeración de Tunja",
    "valor2": "CO-BYY",
    "icm": 45,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 39,
    "pazterritorial": 44,
    "equidadeinclusion": 68,
    "gobernanzaparticipacioneinstituciones": 50,
    "cienciatecnologiaeinnovacion": 27,
    "productividadcompetitividadycomplementariedad": 43,
    "ranking": "5/56"
  },
  {
    "name": "A-Villavicencio",
    "valor": "Aglomeración de Villavicencio",
    "valor2": "CO-MET",
    "icm": 39,
    "adaptabilidadyresiliencia": 0,
    "sostenibilidad": 39,
    "pazterritorial": 33,
    "equidadeinclusion": 62,
    "gobernanzaparticipacioneinstituciones": 41,
    "cienciatecnologiaeinnovacion": 9,
    "productividadcompetitividadycomplementariedad": 49,
    "ranking": "26/56"
  }
]
var uninodales = [
  {
    "relacion": "CO-ANT",
    "Departamento": "Antioquia",
    "municipio": "Antioquia",
    "nombre": "Caucasia",
    "id": 5154,
    "adaptabilidadyresiliencia": 15,
    "sostenibilidad": 27,
    "pazterritorial": 37,
    "equidadeinclusion": 42,
    "gobernanzaparticipacioneinstituciones": 40,
    "cienciatecnologiaeinnovacion": 4,
    "productividadcompetitividadycomplementariedad": 40,
    "icm": 32,
    "lat": "0",
    "long": "0",
    "tipo": "municipio",
    "ranking": "131/151",
    "Aglomeracion-i": "SA-Otros SC",
    "aglomeracion": "SA-OtrosSC",
    "seccion": "uninodal",
    "c1": 1,
    "c2": 1,
    "t1": 14,
    "t2": 1,
    "p1": 71,
    "p2": 1,
    "co1": 100,
    "co2": 20,
    "co3": 1,
    "co4": 1,
    "com1": 100,
    "com2": 10,
    "ic1": 100,
    "ic2": 92,
    "ic3": 1,
    "ic4": 100,
    "s1": 5,
    "s2": 1,
    "s3": 1,
    "po1": 29,
    "sa1": 24,
    "sa2": 100,
    "ed1": 45,
    "ed2": 27,
    "gob1": 1,
    "gob2": 67,
    "par1": 58,
    "fo1": 94,
    "fo2": 9,
    "fo3": 12,
    "fo4": 1,
    "cn1": 3,
    "cn2": 93,
    "cua1": 42,
    "cua2": 1,
    "cua3": 36,
    "cua4": 10,
    "adr1": 100,
    "adr2": 6,
    "gob3": 1
  },
]
$.each(ciudades, function(key, val) {
	var item = [];
	var coloritem = colores[Math.floor(Math.random() * colores.length)];
	if (val.tipo == "capital") {
		item["relacion"] = val.relacion.toUpperCase();
		item["id"] = val.id.toString();
		item["name"] = val.nombre;
		item["value"] = val.ranking.toString();
		///////
		if (val.icm <= 100) {
			item["color"] = "#036B68"
		}
    if (val.icm < 80) {
			item["color"] = "#00A3A4"
		}
		if (val.icm < 60) {
			item["color"] = "#F2AD47"
		}
		if (val.icm < 40) {
			item["color"] = "#FF5F33"
		}
    if (val.icm < 20) {
			item["color"] = "#E5304E"
		}
		item["latitude"] = val.lat.replace(",", ".");
		item["longitude"] = val.long.replace(",", ".");
		item["municipio"] = val.municipio;
		item["departamento"] = val.Departamento;
		if (val.aglomeracion != undefined) {
			item["aglomeracion"] = val.aglomeracion;
		} else {
			item["aglomeracion"] = "";
		}
		items.push(item);
	}
	item["relacion"] = val.relacion.toUpperCase();
	item["id"] = val.id.toString();
	item["name"] = val.nombre;
	item["value"] = val.id.toString();
	///////
  if (val.icm <= 100) {
    item["color"] = "#036B68"
  }
  if (val.icm < 80) {
    item["color"] = "#00A3A4"
  }
  if (val.icm < 60) {
    item["color"] = "#F2AD47"
  }
  if (val.icm < 40) {
    item["color"] = "#FF5F33"
  }
  if (val.icm < 20) {
    item["color"] = "#E5304E"
  }
	item["latitude"] = val.lat.replace(",", ".");
	item["longitude"] = val.long.replace(",", ".");
	item["municipio"] = val.municipio;
	item["departamento"] = val.Departamento;

	if (val.seccion != undefined) {
		item["seccion"] = val.seccion;
	}
	if (val.aglomeracion != undefined) {
		item["aglomeracion"] = val.aglomeracion;
	} else {
		item["aglomeracion"] = "";
	}
	municipios.push(item);
});
var mapData = items,
    select = document.getElementById('ciudades'),
    map,
    minBulletSize = 3,
    maxBulletSize = 70,
    min =
    Infinity,
    max = -Infinity;

//AmCharts.theme = AmCharts.themes.light;

// build map

var chart,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    chart7,
    chart8,
    chart9,
    chart10,
    chart11,
    chart12,
    chart13;

$(document).ready(function() {
	//Scroll inicial
	$("#home .contenido").mCustomScrollbar({
		axis : "y", // vertical and horizontal scrollbar
		updateOnContentResize : true
	});
	// RADAR CHART

	chart2 = AmCharts.makeChart("chartdiv2", {

		"type" : "radar",
		"theme" : "light",
		"fontSize" : 9,
		"radius" : "40%",
		"categoryField" : "source",
		"categoryAxis" : {
			"gridPosition" : "start",
			"gridAlpha" : 0,
			"autoWrap" : true,
			"centerLabels" : true
		},
		"responsive" : {
			"enabled" : true
		},
		"graphs" : [{
			"valueField" : "energy",
			"balloonText" : "[[value]]",
			"bullet" : "round",
			"lineThickness" : 2,
			"lineAlpha" : 1,
			"lineColor" : "#4D8DC6",
			"minDistance" : 0,
			"periodSpan" : 3,
			"precision" : 1,
			"gapPeriod" : 0/*,
			 "colorField": "color"*/
		}],

		"valueAxes" : [{
			"axisTitleOffset" : 15,
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"hideCredits" : true,

		"dataProvider" : [{
			"source" : "Ciencia, Tecnología e Innovación",
			"conteo" : "c",
			"energy" : 2,
			"color" : "#000000"
		}, {
			"source" : "Productividad,\nCompetitividad y\nComplementariedad\nEconómica",
			"conteo" : "pr",
			"energy" : 2,
			"color" : "#000000"
		}, {
			"source" : "Paz Territorial",
			"conteo" : "p",
			"energy" : 2,
			"color" : "#000000"
		}, {
			"source" : "Equidad e Inclusión Social",
			"conteo" : "e",
			"energy" : 2,
			"color" : "#000000"
		}, {
			"source " : "Gobernanza,\nParticipación e\nInstituciones",
			"conteo" : "g",
			"energy" : 2,
			"color" : "#000000"
		}, {
			"source" : "Sostenibilidad",
			"conteo" : "s",
			"energy" : 2,
			"color" : "#000000"
		}]
	});

	chart3 = AmCharts.makeChart("chartdiv4", {

		"type" : "radar",
		"theme" : "light",
		"fontSize" : 9,
		"radius" : "40%",
		"categoryField" : "source",
		"categoryAxis" : {
			"gridPosition" : "start",
			"gridAlpha" : 0,
			"autoWrap" : true
		},
		"valueAxes" : [{
			"axisTitleOffset" : 15,
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"graphs" : [{
			"valueField" : "energy",
			"balloonText" : "[[value]]",
			"bullet" : "round",
			"lineThickness" : 2,
			"lineAlpha" : 1,
			"lineColor" : "#4D8DC6",
			"gapPeriod" : 0,
			"visibleLegend" : true/*,
			 "colorField": "color"*/
		}, {
			"bullet" : "round",
			"valueField" : "energy2",
			"balloonText" : "[[value]]",
			"lineAlpha" : 1,
			"lineThickness" : 2,
			"lineColor" : "#878787",
			"gapPeriod" : 0,
			"visibleLegend" : true/*,
			 "colorField": "color2"*/
		}],

		"hideCredits" : true,

		"dataProvider" : [{
			"source" : "Ciencia, Tecnología e Innovación",
			"conteo" : "c",
			"energy" : 2,
			"energy2" : 2,
			"color" : "#000000",
			"color2" : "#cccccc"
		}, {
			"source" : "Productividad,\nCompetitividad y\nComplementariedad\nEconómica",
			"conteo" : "pr",
			"energy" : 2,
			"energy2" : 2,
			"color" : "#000000",
			"color2" : "#cccccc"
		}, {
			"source" : "Paz Territorial",
			"conteo" : "p",
			"energy" : 2,
			"energy2" : 2,
			"color" : "#000000",
			"color2" : "#cccccc"
		}, {
			"source" : "Equidad e Inclusión Social",
			"conteo" : "e",
			"energy" : 2,
			"energy2" : 2,
			"color" : "#000000",
			"color2" : "#cccccc"
		}, {
			"source" : "Gobernanza,\nParticipación e\nInstituciones",
			"conteo" : "g",
			"energy" : 2,
			"energy2" : 2,
			"color" : "#000000",
			"color2" : "#cccccc"
		}, {
			"source" : "Sostenibilidad",
			"conteo" : "s",
			"energy" : 2,
			"energy2" : 2,
			"color" : "#000000",
			"color2" : "#cccccc"
		}]
	});
	// *** columns **************************************************************

	//column 1//
	chart5 = AmCharts.makeChart("chartdiv5", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Ciencia",
			"c1" : 3.5,
			"c2" : 4.2,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Numero de grupos de investigación equivalentes a A1 Colciencias.(2014) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "c1",
			"fillColorsField" : "color",
			"visibleLegend" : true
		}, {
			"balloonText" : "Número de universidades Acreditadas en Alta calidad.(2014) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "c2",
			"fillColorsField" : "color2",
			"visibleLegend" : true
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : false
		}

	});
	// Columna 2

	chart6 = AmCharts.makeChart("chartdiv6", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Technología e Innovación",
			"t1" : 3.5,
			"t2" : 4.2,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Acceso a Internet por ancho de banda.(2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "t1",
			"fillColorsField" : "color",
			"visibleLegend" : true
		}, {
			"balloonText" : "Promedio de estudiantes por computador en colegios oficiales.(2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "t2",
			"fillColorsField" : "color2",
			"visibleLegend" : true
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 2-1

	chart7 = AmCharts.makeChart("chartdiv7", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Productividad",
			"p1" : 3.5,
			"p2" : 4.2,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Grado de importancia económica.(2014) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "p1",
			"fillColorsField" : "color",
			"visibleLegend" : true
		}, {
			"balloonText" : " Valor agregado por  Kilometro cuadrado.(2014) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "p2",
			"fillColorsField" : "color2",
			"visibleLegend" : true
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});

	//column 2-2//
	chart15 = AmCharts.makeChart("chartdiv15", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Competitividad",
			"co1" : 3.5,
			"co2" : 4.2,
			"co3" : 5.2,
			"co4" : 5.2,
			"color" : "#000000",
			"color2" : "#000000",
			"color3" : "#000000",
			"color4" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Conectividad física.(2016) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "co1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : " Transporte aéreo según categoría de aeropuerto. <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "co2",
			"fillColorsField" : "color2"
		}, {
			"balloonText" : "Cantidad de carga transportada por carretera. (Toneladas por kilómetro) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "co3",
			"fillColorsField" : "color3"
		}, {
			"balloonText" : "Muertes promedio en accidentes de tránsito por cada 100 mil habitantes. <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "co4",
			"fillColorsField" : "color4"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 2-3

	chart16 = AmCharts.makeChart("chartdiv16", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Productividad",
			"com1" : 3.5,
			"com2" : 4.2,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Categoría de ruralidad.(2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "com1",
			"fillColorsField" : "color",
			"visibleLegend" : true
		}, {
			"balloonText" : "Puntaje de las relaciones unidireccionales y bidireccionales de carga terrestre. <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "com2",
			"fillColorsField" : "color2",
			"visibleLegend" : true
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	//column 3-1//
	chart8 = AmCharts.makeChart("chartdiv8", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Intensidad Conflicto",
			"ic1" : 3.5,
			"ic2" : 4.2,
			"ic3" : 5.2,
			"ic4" : 5.2,
			"color" : "#000000",
			"color2" : "#000000",
			"color3" : "#000000",
			"color4" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Número de casos de minas antipersonas por cada 100 mil Hab. (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "ic1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Número de victimas de secuestro por cada 100 mil Hab. (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "ic2",
			"fillColorsField" : "color2"
		}, {
			"balloonText" : "Número de población desplazada por cada 100 mil Hab. (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "ic3",
			"fillColorsField" : "color3"
		}, {
			"balloonText" : "% del área del municipio sembrada con hoja de coca (2015). <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "ic4",
			"fillColorsField" : "color4"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 3-2

	chart9 = AmCharts.makeChart("chartdiv9", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Seguridad",
			"s1" : 3.5,
			"s2" : 4.2,
			"s3" : 4.2,
			"color" : "#000000",
			"color2" : "#000000",
			"color3" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Número de lesiones y agresiones entre personas por cada 100 mil Hab. (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "s1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Número de homicidios por cada 100 mil Hab. (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "s2",
			"fillColorsField" : "color2"
		}, {
			"balloonText" : "Número de hurtos comunes por cada 100 mil Hab. ( 2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "s3",
			"fillColorsField" : "color3"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 4-1

	chart10 = AmCharts.makeChart("chartdiv10", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Gobernanza",
			"gob1" : 3.5,
			"gob2" : 4.2,
			"gob3" : 4.2,
			"color" : "#000000",
			"color2" : "#000000",
			"color3" : "#8A0886"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Pertenece a esquemas asociativos <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.60,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "gob1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Efectividad regional. <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.60,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "gob2",
			"fillColorsField" : "color2"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 4-1

	chart19 = AmCharts.makeChart("chartdiv19", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Participación",
			"par1" : 3.5,
			"color" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Tasa de participación electoral alcaldía (2011 y 2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "par1",
			"fillColorsField" : "color"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 4-1

	chart20 = AmCharts.makeChart("chartdiv20", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Fortaleza Institucional",
			"fo1" : 3.5,
			"fo2" : 3.5,
			"fo3" : 3.5,
			"fo4" : 3.5,
			"color" : "#000000",
			"color2" : "#000000",
			"color3" : "#000000",
			"color4" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Promedio tasa de recaudo tributación predial por predio. (2013 - 2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "fo2",
			"fillColorsField" : "color2"
		}, {
			"balloonText" : "Tasa promedio de sentencias de delitos contra la administración pública por cada 100 mil habitantes. (2011 - 2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "fo1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Participación de los recursos propios en la inversión total. (2014 y 2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "fo3",
			"fillColorsField" : "color3"
		}, {
			"balloonText" : "Estado de actualización catastro urbano y rural. (2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "fo4",
			"fillColorsField" : "color4"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 5-1

	chart11 = AmCharts.makeChart("chartdiv11", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Capital Natural	",
			"cn1" : 3.5,
			"cn2" : 4.2,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Proporción de hectáreas en RUNAP o Ecosistemas Estratégicos. <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "cn1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Proporción de hectáreas de bosques deforestadas del Municipio respecto a su departamento. <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.70,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "cn2",
			"fillColorsField" : "color2"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});

	//column 5-2//
	chart12 = AmCharts.makeChart("chartdiv12", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Cuidado Ambiental",
			"cua1" : 3.5,
			"cua2" : 3.5,
			"cua3" : 3.5,
			"cua4" : 3.5,
			"color" : "#000000",
			"color2" : "#000000",
			"color3" : "#000000",
			"color4" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "PM10 <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.80,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "cua1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Porcentaje de caudal tratado de aguas residuales. <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.80,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "cua2",
			"fillColorsField" : "color2"
		}, {
			"balloonText" : "Residuos sólidos. <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.80,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "cua3",
			"fillColorsField" : "color3"
		}, {
			"balloonText" : "Uso adecuado del suelo agrícola. <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.80,
			"title" : "Número de universidades",
			"type" : "column",
			"valueField" : "cua4",
			"fillColorsField" : "color4"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 6-1

	chart13 = AmCharts.makeChart("chartdiv13", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Pobreza",
			"po1" : 3.5,
			"color" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Índice de pobreza multidimensional. (2005) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.60,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "po1",
			"fillColorsField" : "color"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 6-2

	chart17 = AmCharts.makeChart("chartdiv17", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Salud",
			"sa1" : 3.5,
			"sa2" : 3.5,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Tasa de mortalidad infantil por cada 1.000 niños (todos las causas de muerte menos desnutrición). (2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.60,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "sa1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Promedio IRCA. (2014-2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.60,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "sa2",
			"fillColorsField" : "color2"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// Columna 6-3

	chart18 = AmCharts.makeChart("chartdiv18", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Educación",
			"ed1" : 3.5,
			"ed2" : 3.5,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Calidad de la educación - % de colegios según categoría de desempeño. (2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "ed1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Tasa de cobertura de educación. (2015) <b>[[value]]</b>",
			"fillAlphas" : 1,
			"lineAlpha" : 0.2,
			"columnWidth": 0.50,
			"title" : "Estandarizada",
			"type" : "column",
			"valueField" : "ed2",
			"fillColorsField" : "color2"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	//column 5-2//
	chart14 = AmCharts.makeChart("chartdiv14", {
		"theme" : "light",
		"type" : "serial",
		"startDuration" : 1,
		"fontSize" : 9,
		"dataProvider" : [{
			"titulo" : "Adaptabilidad y resiliencia",
			"adr1" : 3.5,
			"adr2" : 4.2,
			"color" : "#000000",
			"color2" : "#000000"
		}],
		"balloon" : {
			"fixedPosition" : false
		},
		"valueAxes" : [{

			"position" : "left",
			"title" : "",
			"maximum" : 100,
			"minimum" : 0,
			"minMaxMultiplier" : 0,
			"axisAlpha" : 0.15,
			"dashLength" : 3
		}],
		"startDuration" : 1,
		"graphs" : [{
			"balloonText" : "Promedio de personas afectadas y fallecidas y viviendas destruidas por evento en desastres asociados a fenómenos naturales (por cada 100.000 habitantes). (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.80,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "adr1",
			"fillColorsField" : "color"
		}, {
			"balloonText" : "Promedio de inversión en gestión de riesgo como proporción de la inversión total. (2011-2015) <b>[[value]]</b>",
			"fillAlphas" : 0.9,
			"lineAlpha" : 0.2,
			"columnWidth": 0.80,
			"title" : "Estandarizada final",
			"type" : "column",
			"valueField" : "adr2",
			"fillColorsField" : "color2"
		}],
		"plotAreaFillAlphas" : 0.1,
		"categoryField" : "titulo",
		"categoryAxis" : {
			"gridPosition" : "start"
		},
		"hideCredits" : true,
		"export" : {
			"enabled" : true
		}

	});
	// *** CREATE MAP ***********************************************************
	var dataProvider = {
		mapVar : AmCharts.maps.colombiaHigh,
		getAreasFromMap : true,
		images : [],
		zoomLevel : 0.9
	}

	// create circle for each country

	// it's better to use circle square to show difference between values, not a
	// radius
	var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
	var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
	var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
	// create circle for each country
	for (var i = 0; i < mapData.length; i++) {
		var dataItem = mapData[i];

		var size = Math.sqrt(2000 / (Math.PI * 2));
		var id = dataItem.id;

		dataProvider.images.push({
			type : "circle",
			zoomLevel : 5,
			scale : 1,
			color : dataItem.color,
			longitude : dataItem.longitude,
			latitude : dataItem.latitude,
			title : dataItem.name,
			id : dataItem.id,
			value : dataItem.value
		});
	}
	var map = AmCharts.makeChart("mapdiv", {
		"type" : "map",
		"theme" : "light",
		"dataProvider" : dataProvider,
		"areasSettings" : {

			"alpha" : 0.8,
			"color" : "#ccc",
			"colorSolid" : "#ccc",
			"unlistedAreasAlpha" : 0.8,
			"unlistedAreasColor" : "#000000",
			"outlineColor" : "#FFFFFF",
			"outlineAlpha" : 0.5,
			"outlineThickness" : 1,
			"rollOverColor" : "#bbb",
			"rollOverOutlineColor" : "#bbb",
			"selectedOutlineColor" : "#bbb",
			"selectedColor" : "#bbb",
			"unlistedAreasOutlineColor" : "#bbb",
			"unlistedAreasOutlineAlpha" : 0.5,
			"autoZoom" : true,
			"balloonText" : "[[title]] <strong>[[value]]</strong>"
		},
		"hideCredits" : true,
		"zoomControl" : {
			"minZoomLevel" : 0.9
		}

	});
	map.addListener("clickMapObject", function(event) {

		if (event.mapObject.id != undefined) {

			map.projection = "eckert5";
			if (ciudad1 == 0) {
				if ($.isNumeric(event.mapObject.id)) {
					var destinonumerico = jQuery.grep(items, function(n, i) {
						return (n.id == event.mapObject.id);
					});

					if (destinonumerico.length > 0) {
						if ($(".cont-municipios").css('display') == 'none') {
							$(".cont-municipios").css("display", "block");
							$(".cerrar").data("destino", event.mapObject.id)
							$("#municipios").html('<option value=""  selected>- Seleccione uno:</option>');
							var destinomunicipios = jQuery.grep(municipios, function(n, i) {
								return (n.relacion == destinonumerico[0].relacion);
							});

							if (destinomunicipios.length > 0) {
								$(".buscador").html(destinonumerico[0].municipio);
								$.each(destinomunicipios, function(index, value2) {

									$("#municipios").append('<option value="' + value2.id + '">' + value2.name + '</option>')

								});
								$("#municipios").append($("#municipios option").remove().sort(function(a, b) {
									var at = $(a).text(),
									    bt = $(b).text();
									return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
								}));
								$('#municipios').material_select();
								$('#municipios').val(event.mapObject.id).change();
							}
						}

					} else {
						console.log("No se encontro");
					}
				} else {
					$(".cont-ciudades").slideUp("fast");
					var valor = event.mapObject.id;

					if (valor != "") {
						/*if( $( ".cont-municipios" ).css( 'display' ) == 'none' ) */
						{
							$(".cont-municipios").css("display", "block");
							$(".cerrar").data("destino", event.mapObject.id)
							$("#municipios").html('<option value=""  selected>- Seleccione uno:</option>');
							if ($("#tipociudad").val() == "normal") {
								var comparar = jQuery.grep(aglomeraciones, function(n, i) {
									return (n.valor == $("#ciudades option:selected").html());
								})
							}
							if (comparar == "") {
								$("#tipo").val("municipios")
							}
							var destinomunicipios = jQuery.grep(municipios, function(n, i) {
								if ($("#tipo").val() == "ciudad") {
									if ($("#tipociudad").val() == "normal") {
										return (n.aglomeracion == comparar[0].name);
									} else {
										return (n.relacion == valor && n.seccion == "uninodal");
									}
								} else {
									if (n.seccion == "" || n.seccion == undefined) {
										return (n.relacion == valor);
									}
								}
							});
							if ($("#tipo").val() == "ciudad") {
								//$(".tipo").addClass("tipotm");
								if ($("#tipociudad").val() == "normal") {
									$(".buscador").html("Ciudad funcional - " + $("#ciudades option:selected").html())

								} else {
									$(".buscador").html("Ciudad uninodal " + event.mapObject.enTitle)

								}
							} else {
								$(".tipo").removeClass("tipotm");
								$(".buscador").html(event.mapObject.enTitle)

							}
							if (destinomunicipios.length > 0) {
								destinomunicipios.sort(function(a, b) {
									return a.name < b.name;
								});
								$.each(destinomunicipios, function(index, value2) {

									$("#municipios").append('<option value="' + value2.id + '">' + value2.name + '</option>')

								});
								$("#municipios").append($("#municipios option").remove().sort(function(a, b) {
									var at = $(a).text(),
									    bt = $(b).text();
									return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
								}));
								$('#municipios').val("");
								$('#municipios').material_select();
							}
						}
					}
				}

			} else {

				if ($.isNumeric(event.mapObject.id)) {
					var destinonumerico = jQuery.grep(items, function(n, i) {
						return (n.id == event.mapObject.id);
					});

					if (destinonumerico.length > 0) {
						if ($(".cont-municipios2").css('display') == 'none') {
							$(".cont-municipios2").css("display", "block");
							$(".cerrar2").data("destino", event.mapObject.id)
							$("#municipios2").html('<option value="" selected>- Seleccione uno:</option>');
							var destinomunicipios = jQuery.grep(municipios, function(n, i) {
								return (n.relacion == destinonumerico[0].relacion);
							});

							if (destinomunicipios.length > 0) {
								$.each(destinomunicipios, function(index, value2) {

									$(".buscador2").html(destinonumerico[0].municipio);
									$("#municipios2").append('<option value="' + value2.id + '">' + value2.name + '</option>')

								});
								$("#municipios2").append($("#municipios2 option").remove().sort(function(a, b) {
									var at = $(a).text(),
									    bt = $(b).text();
									return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
								}));
								$('#municipios2').val("");
								$('#municipios2').material_select();
								$('#municipios2').val(event.mapObject.id).change();
							}
						}

					} else {
						console.log("No se encontro");
					}
				} else {
					$(".cont-ciudades2").slideUp("fast");
					var valor = event.mapObject.id;

					if (valor != "") {
						/*if( $( ".cont-municipios" ).css( 'display' ) == 'none' ) */
						{
							$(".cont-municipios2").css("display", "block");
							$(".cerrar2").data("destino", event.mapObject.id)
							$("#municipios2").html('<option value=""  selected>- Seleccione uno:</option>');
							if ($("#tipociudad2").val() == "normal") {
								var comparar = jQuery.grep(aglomeraciones, function(n, i) {
									return (n.valor == $("#ciudades2 option:selected").html());
								})
							}
							if (comparar == "") {
								$("#tipo2").val("municipios")
							}
							var destinomunicipios = jQuery.grep(municipios, function(n, i) {
								if ($("#tipo2").val() == "ciudad") {
									if ($("#tipociudad2").val() == "normal") {
										return (n.aglomeracion == comparar[0].name);
									} else {
										return (n.relacion == valor && n.seccion == "uninodal");
									}
								} else {
									if (n.seccion == "" || n.seccion == undefined) {
										return (n.relacion == valor);
									}
								}
							});
							if ($("#tipo2").val() == "ciudad") {
								//$(".tipo").addClass("tipotm");
								if ($("#tipociudad2").val() == "normal") {
									$(".buscador2").html("Ciudad funcional - " + $("#ciudades option:selected").html())

								} else {
									$(".buscador2").html("Ciudad uninodal " + event.mapObject.enTitle)

								}
							} else {
								$(".tipo2").removeClass("tipotm");
								$(".buscador2").html(event.mapObject.enTitle)

							}
							if (destinomunicipios.length > 0) {
								destinomunicipios.sort(function(a, b) {
									return a.name < b.name;
								});
								$.each(destinomunicipios, function(index, value2) {

									$("#municipios2").append('<option value="' + value2.id + '">' + value2.name + '</option>')

								});
								$("#municipios2").append($("#municipios2 option").remove().sort(function(a, b) {
									var at = $(a).text(),
									    bt = $(b).text();
									return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
								}));
								$('#municipios2').val("");
								$('#municipios2').material_select();
							}

						}
					}
				}
			}
		}
	});

	function addLegendLabel(e) {
		var title = document.createElement("div");
		title.innerHTML = "Ciudades";
		title.className = "legend-title";
		e.chart.legendDiv.appendChild(title)
	}

	function handleInit(event) {

		// let's build a custom legend
		var chart = event.chart;

		// get legend object
		var legend = document.getElementById("legenddiv");

		// cycle through the data
		for (var i = 0; i < chart.dataProvider.length; i++) {
			// data point
			var dp = chart.dataProvider[i];

			// create a legend item holder
			var item = document.createElement("div");

			// create marker
			var marker = document.createElement("div");
			marker.className = "marker";
			marker.style.backgroundColor = chart.colors[i];
			item.appendChild(marker);

			// create title
			var title = document.createElement("div");
			title.className = "title";
			title.innerHTML = dp.title;
			item.appendChild(title);

			// create change
			var change = document.createElement("div");
			change.className = dp.change < 0 ? "change negative" : "change positive";
			change.innerHTML = Math.abs(dp.change);
			item.appendChild(change);

			// create absolute value
			var value = document.createElement("div");
			value.className = "value";
			value.innerHTML = dp.value;
			item.appendChild(value);

			// add item to legend
			legend.appendChild(item);
		}

	}

	function handleRollOver(e) {
		var wedge = e.dataItem.wedge.node;
		wedge.parentNode.appendChild(wedge);
	}

	function centerMap() {
		map.zoomToLongLat(map.initialZoomLevel, map.initialZoomLongitude, map.initialZoomLatitude);
		map.projection = "mercator";
	}


	$(".cerrar").on("click", function() {
		$(".buscador2").removeClass("activo")
		$(".buscador").addClass("activo")
		$(".tipo").css("display", "none");
		$(".cont-municipios2").css("display", "none");
		if ($(".titulo2").css("display") == "block") {
			$(".content-charts,.titulo2").css("display", "none")
			$(".cont-municipios").css("display", "none");
			$(".cont-municipios2").css("display", "none");
			$(".cont-ciudades2 .quickselect__btn").removeClass('active').removeClass('btn-primary');
			$("#municipios2").val("");
			$(".buscador2").html("buscador");
			ciudad1 = 0;
			map.clickMapObject(map.getObjectById($(".cerrar2").data("destino")));
			$('#municipios').val($(".cerrar2").data("destino2")).change();
		} else {
			$('#ciudades2').val("");
			$(".buscador2,.titulo").css("display", "none");
			$(".content-charts").fadeOut("fast");
			$(".cont-ciudades .quickselect__btn").removeClass('active').removeClass('btn-primary');
			$(".buscador").html("buscador");
			$(".columna-der").removeClass('completo');
			$("#mapdiv").removeClass("efectozoom");
			$(".cont-municipios").css("display", "none");
			$(".cont-municipios2").css("display", "none");
			$('#ciudades2').val("");
			$('#ciudades').val("");
			$("#municipios2").val("");
			$("#municipios").val("");
			ciudad1 = 0;
			centerMap();
		}

		return false;
	});
	$(".cerrar2").on("click", function() {
		$(".buscador").removeClass("activo")
		$(".buscador2").addClass("activo")
		$(".tipo2").css("display", "none");
		$(".content-charts,.titulo2").css("display", "none");
		$(".cont-ciudades2 .quickselect__btn").removeClass('active').removeClass('btn-primary');
		$(".cont-municipios2").css("display", "none");
		$("#municipios2").val("");
		$(".buscador2").html("seleccione otra ciudad");
		ciudad1 = 0;
		if ($(".titulo").css("display") == "block") {
			map.clickMapObject(map.getObjectById($(".cerrar").data("destino")));
			$('#municipios').val($(".cerrar").data("destino2")).change();
			return false;
		} else {
			return false;
		}

	})

	$(".buscador").on("click", function() {
		$("#tipo").find($('option')).attr('selected', false)
		$("#tipo").parent().find(".select2OptionPicker").remove();
		$('#tipo').select2OptionPicker({
			noDefault : true
		});
		$(".tipo").css("display", "none");
		if ($(this).hasClass("activo")) {
			if ($('#municipios2').val() == "") {
				$(".cont-ciudades").slideDown("fast");
			}

			$(".tipociudadcont").fadeOut("fast");
			$(".tipo").fadeOut("fast");
			$(".cont-municipios").fadeOut("fast");
		}
	})
	$(".buscador2").on("click", function() {
		$("#tipo2").find($('option')).attr('selected', false)
		$("#tipo2").parent().find(".select2OptionPicker").remove();
		$('#tipo2').select2OptionPicker({
			noDefault : true
		});
		if ($(this).hasClass("activo")) {
			if ($('#municipios2').val() == "") {
				$(".cont-ciudades2").slideDown("fast");
			}
			$(".tipociudadcont2").fadeOut("fast");
			$(".tipo2").fadeOut("fast");
			$(".cont-municipios2").fadeOut("fast");
		}
	})
	$(".botones .boton").on("click", function() {
		$(".contenido-chart").css("display", "none");
		$(".botones .boton").each(function() {
			$(this).removeClass('active');
			var nombre = $(this).find("img").attr("src").replace("h.png", ".png");
			$(this).find("img").attr("src", nombre);
		})
		$(this).addClass("active");
		$(".contenido-chart").css("display", "none");
		$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "h.png"));
		$($(this).attr("href")).fadeIn("fast");
		return false
	})
	$("body").on("click", ".cboton img", function() {
		$(".contenido-chart").css("display", "none");
		$(".t_item").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass("active");
		$(".c-destino").css("display", "block");

		return false
	})
	$("body").on("click", ".prboton img", function() {
		$(".contenido-chart").css("display", "none");
		$(".t_item").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass("active");
		$(".c-destino2").css("display", "block");

		return false
	})
	$("body").on("click", ".pboton img", function() {
		$(".contenido-chart").css("display", "none");
		$(".t_item").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass("active");
		$(".c-destino3").css("display", "block");

		return false
	})
	$("body").on("click", ".gboton img", function() {
		$(".contenido-chart").css("display", "none");
		$(".t_item").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass("active");
		$(".c-destino4").css("display", "block");

		return false
	})
	$("body").on("click", ".sboton img", function() {
		$(".contenido-chart").css("display", "none");
		$(".t_item").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass("active");
		$(".c-destino5").css("display", "block");

		return false
	})
	$("body").on("click", ".eboton img", function() {
		$(".contenido-chart").css("display", "none");
		$(".t_item").each(function() {
			$(this).removeClass('active');
		})
		$(this).addClass("active");
		$(".c-destino6").css("display", "block");

		return false
	})
	/*$('#tipo,#tipociudad,#tipociudad2,#tipo2').quickselect({
	 activeButtonClass : 'btn-primary active',
	 breakOutAll : true,
	 buttonClass : 'btn btn-default',
	 selectDefaultText : 'Other',
	 wrapperClass : 'btn-group'
	 });*/

	/*$(".quickselect__btn").each(function() {
	 if ($(this).data("quickselect-value") == "CO-NSA" || $(this).data("quickselect-value") == "CO-SAP") {
	 $(this).css("width", "65.8%")
	 }
	 })*/
	$('#tipociudad,#tipociudad2').select2OptionPicker({
		noDefault : true
	});
	$("#tipo").on("change", function(event) {
		$("#ciudades").parent().find(".select2OptionPicker").remove();
		$("#ciudades").html("");
		if ($(this).find($('option:selected')).val() == "municipios") {
			$(".tipo").removeClass("tipotm");
			$(".tipo").css("display", "none");
			$(".tipociudadcont").fadeOut("fast");
			$.each(mapData, function(index, value) {
				if(value.relacion !="CO-DC"){
					$("#ciudades").append('<option value="' + value.relacion + '">' + value.departamento + '</option>')
				}
			});
			$("#ciudades").append($("#ciudades option").remove().sort(function(a, b) {
				var at = $(a).text(),
				    bt = $(b).text();
				return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
			}));
			$('#ciudades').select2OptionPicker({
				noDefault : true
			});
			$(".tipo").fadeIn("fast");
		} else {
			$(".tipociudadcont").fadeIn("fast");
		}
	})
	$("#tipociudad").on("change", function(event) {
		$("#ciudades").parent().find(".select2OptionPicker").remove();
		$("#ciudades").html("");
		$(".tipo").css("display", "none");
		var seleccionado = $(this).val();
		if ($(this).val() != "") {
			$(".tipociudadcont").fadeOut("fast");
			if (seleccionado == "uninodal") {
				$(".tipo").removeClass("tipotm");
				$.each(mapData, function(index, value) {
					contar = 0;

					$.each(municipios, function(index, value2) {
						if (value2.seccion == seleccionado && value2.relacion == value.relacion) {
							contar++;
						}
					});
					if (contar > 0) {
						$("#ciudades").append('<option value="' + value.relacion + '">' + value.departamento + '</option>')

					}
				});
			} else {
				$(".tipo").addClass("tipotm");
				$.each(aglomeraciones, function(index, value2) {
					$("#ciudades").append('<option value="' + value2.valor2 + '">' + value2.valor + '</option>')

				});
			}
			$("#ciudades").append($("#ciudades option").remove().sort(function(a, b) {
				var at = $(a).text(),
				    bt = $(b).text();
				return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
			}));
			$('#ciudades').select2OptionPicker({
				noDefault : true
			});
			$(".tipo").fadeIn("fast");
		}
	})
	$("#tipo2").on("change", function(event) {
		if ($(this).find($('option:selected')).html() == "ÍNDICE DE CIUDADES" && $(this).val() != "ciudad") {
			$(this).val("ciudad");
		}
		if ($(this).find($('option:selected')).html() == "ÍNDICE DE MUNICIPIOS" && $(this).val() != "municipios") {
			$(this).val("ciudad");
		}
		$("#ciudades2").parent().find(".select2OptionPicker").remove();
		$("#ciudades2").html("");
		if ($(this).val() == "municipios") {
			$(".tipo2").removeClass("tipotm");
			$(".tipociudadcont2").fadeOut("fast");
			$.each(mapData, function(index, value) {
				if(value.relacion !="CO-DC"){
					$("#ciudades2").append('<option value="' + value.relacion + '">' + value.departamento + '</option>')
				}
			});
			$("#ciudades2").append($("#ciudades2 option").remove().sort(function(a, b) {
				var at = $(a).text(),
				    bt = $(b).text();
				return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
			}));
			$('#ciudades2').select2OptionPicker({
				noDefault : true
			});
			$(".tipo2").fadeIn("fast");
		} else {
			$(".tipociudadcont2").fadeIn("fast");
		}
	})
	$("#tipociudad2").on("change", function(event) {
		$("#ciudades2").parent().find(".select2OptionPicker").remove();
		$("#ciudades2").html("");
		var seleccionado2 = $(this).val();
		if ($(this).val() != "") {
			$(".tipociudadcont2").fadeOut("fast");
			if (seleccionado2 == "uninodal") {
				$(".tipo2").removeClass("tipotm");
				$.each(mapData, function(index, value) {
					contar = 0;

					$.each(municipios, function(index, value2) {
						if (value2.seccion == seleccionado2 && value2.relacion == value.relacion) {
							contar++;
						}
					});
					if (contar > 0) {
						$("#ciudades2").append('<option value="' + value.relacion + '">' + value.departamento + '</option>')
					}
				});
			} else {
				$(".tipo2").addClass("tipotm");
				$.each(aglomeraciones, function(index, value2) {

					$("#ciudades2").append('<option value="' + value2.valor2 + '">' + value2.valor + '</option>')

				});
			}
			$("#ciudades2").append($("#ciudades2 option").remove().sort(function(a, b) {
				var at = $(a).text(),
				    bt = $(b).text();
				return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
			}));
			$('#ciudades2').select2OptionPicker({
				noDefault : true
			});
			$(".tipo2").fadeIn("fast");
		}
	})

	$('#ciudades').on('change', function(event) {
		var select= $(this);
		if ($("#tipociudad").val() == "normal" && $("#tipo").val() == "ciudad") {
			$(".tipo").css("display", "none");
			//datos
			var value = jQuery.grep(aglomeraciones, function(n, i) {
				return (n.valor2 == select.val());
			})

			$("#chartdiv3").html("");
			$("#chartdiv1").html("");
			$(".municipio").html("<div class='mun-tit'>" + value[0].valor + "</div>");
			$(".ranking").html("<div class='mun-tit'>" + value[0].ranking + "</div><br>RANKING ");
			colory1 = colorSelect(value[0].cienciatecnologiaeinnovacion);
			colory2 = colorSelect(value[0].productividadcompetitividadycomplementariedad);
			colory3 = colorSelect(value[0].pazterritorial);
			colory4 = colorSelect(value[0].equidadeinclusion);
			colory5 = colorSelect(value[0].gobernanzaparticipacioneinstituciones);
			colory6 = colorSelect(value[0].sostenibilidad);
			chartData = [{
				source : "Ciencia, Tecnología e Innovación",
				conteo : "c",
				energy : value[0].cienciatecnologiaeinnovacion,
				color : colory1
			}, {
				source : "Productividad,\nCompetitividad y\nComplementariedad\nEconómica",
				conteo : "pr",
				energy : value[0].productividadcompetitividadycomplementariedad,
				color : colory2
			}, {
				source : "Paz Territorial",
				conteo : "p",
				energy : value[0].pazterritorial,
				color : colory3
			}, {
				source : "Equidad e Inclusión Social",
				conteo : "e",
				energy : value[0].equidadeinclusion,
				color : colory4
			}, {
				source : "Gobernanza,\nParticipación e\nInstituciones",
				conteo : "g",
				energy : value[0].gobernanzaparticipacioneinstituciones,
				color : colory5
			}, {
				source : "Sostenibilidad",
				conteo : "s",
				energy : value[0].sostenibilidad,
				color : colory6
			}];
			var comtipo = 'ciudades modernas';
			$("#chartdiv3").append('<div class="campo"><span class="titulo_item"><strong>Índice de ' + comtipo + '</strong></span><span class="valor_item">' + value[0].icm  + '</span></div>');
			$("#chartdiv3").append('<div class="campo"><strong>DIMENSIONES</strong></div>');
			$.each(chartData, function(index, value2) {
				$("#chartdiv3").append('<div class="campo"><span class="titulo_item">' + value2.source + '</span><span class="valor_item">' + value2.energy + '</span></div>');
			})
			/*chart.dataProvider = chartData;
			 chart.validateData( );
			 chart.animateAgain( );*/
			chart2.dataProvider = chartData;
			chart2.validateData();
			chart2.animateAgain();
			if ($(".content-charts").css("display") == "none") {
				$(".content-charts").css("display", "block");
				$(".columna-der").addClass("completo");
			}
			$(".contenido-chart").css("display", "none");
			$(".titulo").css("display", "block");
			$("#chartdiv3").fadeIn("fast", function() {
				$(".botones .boton").each(function() {
					$(this).removeClass('active');
					if($(this).attr("href")=="#chartdiv1"){
						$(this).css("display","none")
					}
				})
				if ($(".botones").css("display") == "none") {
					$(".botones").fadeIn("fast");
				}
			});
			$(".columder").mCustomScrollbar({
				axis : "y", // vertical and horizontal scrollbar
				updateOnContentResize : true
			});
		}
		if ($(this).val() != "") {
			map.clickMapObject(map.getObjectById($(this).val()));
		}
	});
	$('#ciudades2').on('change', function(event) {
		var select= $(this);

		if ($(this).val() != "") {
			map.clickMapObject(map.getObjectById($(this).val()));
		}
	});
	$('#municipios').on('change', function(event) {
		var valor = $(this).val();
		if ($(this).val() != "" && $('#municipios2').val() == "") {
			$(".buscador").removeClass("activo")
			$(".buscador2").addClass("activo")
			if ($(".content-charts").css("display") == "none") {
				$(".content-charts").css("display", "block");
				$(".columna-der").addClass("completo");
			}
			$("#mapdiv").addClass("efectozoom");
			$(".cont-ciudades").fadeOut("fast");
			$(".cont-ciudades2").fadeOut("fast");
			$(".tipo").fadeOut("fast");
			$(".cerrar").data("destino2", valor)
			var destino,
			    tipomun = "",
			    icmbvalor;
			$.each(ciudades, function(index, value) {

				if (value.id == valor) {
					icmbvalor = value.icm;
					destino = value.nombre;
					let deftipo;
					if (value.seccion != "" && value.seccion != undefined) {
						tipo = "Ciudad";
					} else {
						tipo = "Municipio";
					}
					$(".ranking").html("<div class='mun-tit'>" + value.ranking + "</div><br/>RANKING");
					$(".municipio").html("<div class='mun-tit'>" + destino + "</div><br/>"/* + tipo.toUpperCase() + ": "*/ + value.Departamento);
					colory1 = colorSelect(value.cienciatecnologiaeinnovacion);
					colory2 = colorSelect(value.productividadcompetitividadycomplementariedad);
					colory3 = colorSelect(value.pazterritorial);
					colory4 = colorSelect(value.equidadeinclusion);
					colory5 = colorSelect(value.gobernanzaparticipacioneinstituciones);
					colory6 = colorSelect(value.sostenibilidad);
					chartData = [{
						source : "Ciencia, Tecnología e Innovación",
						conteo : "c",
						energy : value.cienciatecnologiaeinnovacion,
						color : colory1
					}, {
						source : "Productividad,\nCompetitividad y\nComplementariedad\nEconómica",
						conteo : "pr",
						energy : value.productividadcompetitividadycomplementariedad,
						color : colory2
					}, {
						source : "Paz Territorial",
						conteo : "p",
						energy : value.pazterritorial,
						color : colory3
					}, {
						source : "Equidad e Inclusión Social",
						conteo : "e",
						energy : value.equidadeinclusion,
						color : colory4
					}, {
						source : "Gobernanza,\nParticipación e\nInstituciones",
						conteo : "g",
						energy : value.gobernanzaparticipacioneinstituciones,
						color : colory5
					}, {
						source : "Sostenibilidad",
						conteo : "s",
						energy : value.sostenibilidad,
						color : colory6
					}];
					color1 = colorSelect(value.c1);
					color2 = colorSelect(value.c2);

					chartData5 = [{
						"titulo" : "Ciencia",
						"c1" : value.c1,
						"c2" : value.c2,
						"color" : color1,
						"color2" : color2
					}]
					color1 = colorSelect(value.t1);
					color2 = colorSelect(value.t2);

					chartData6 = [{
						"titulo" : "Tecnología e Innovación",
						"t1" : value.t1,
						"t2" : value.t2,
						"color" : color1,
						"color2" : color2
					}]

					color1 = colorSelect(value.p1);
					color2 = colorSelect(value.p2);
					chartData7 = [{
						"titulo" : "Productividad",
						"p1" : value.p1,
						"p2" : value.p2,
						"color" : color1,
						"color2" : color2
					}]
					color1 = colorSelect(value.co1);
					color2 = colorSelect(value.co2);
					color3 = colorSelect(value.co3);
					color4 = colorSelect(value.co4);
					chartData15 = [{
						"titulo" : "Competitividad",
						"co1" : value.co1,
						"co2" : value.co2,
						"co3" : value.co3,
						"co4" : value.co4,
						"color" : color1,
						"color2" : color2,
						"color3" : color3,
						"color4" : color4
					}]
					color1 = colorSelect(value.com1);
					color2 = colorSelect(value.com2);
					chartData16 = [{
						"titulo" : "Complementariedad Económica",
						"com1" : value.com1,
						"com2" : value.com2,
						"color" : color1,
						"color2" : color2,
					}]
					color1 = colorSelect(value.ic1);
					color2 = colorSelect(value.ic2);
					color3 = colorSelect(value.ic3);
					color4 = colorSelect(value.ic4);
					chartData8 = [{
						"titulo" : "Intensidad Conflicto",
						"ic1" : value.ic1,
						"ic2" : value.ic2,
						"ic3" : value.ic3,
						"ic4" : value.ic4,
						"color" : color1,
						"color2" : color2,
						"color3" : color3,
						"color4" : color4
					}]
					color1 = colorSelect(value.s1);
					color2 = colorSelect(value.s2);
					color3 = colorSelect(value.s3);
					chartData9 = [{
						"titulo" : "Seguridad",
						"s1" : value.s1,
						"s2" : value.s2,
						"s3" : value.s3,
						"color" : color1,
						"color2" : color2,
						"color3" : color3
					}]

					color1 = colorSelect(value.gob1);
					color2 = colorSelect(value.gob2);
					color3 = colorSelect(value.gob3);
					chartData10 = [{
						"titulo" : "Gobernanza",
						"gob1" : value.gob1,
						"gob2" : value.gob2,
						"gob3" : value.gob3,
						"color" : color1,
						"color2" : color2,
						"color3" : color3
					}]
					///////

					color1 = colorSelect(value.cn1);
					color2 = colorSelect(value.cn2);
					chartData11 = [{
						"titulo" : "Capital Natural	",
						"cn1" : value.cn1,
						"cn2" : value.cn2,
						"color" : color1,
						"color2" : color2
					}]
					///////
					color1 = colorSelect(value.cua1);
					color2 = colorSelect(value.cua2);
					color3 = colorSelect(value.cua3);
					color4 = colorSelect(value.cua4);
					chartData12 = [{
						"titulo" : "Cuidado Ambiental",
						"cua1" : value.cua1,
						"cua2" : value.cua2,
						"cua3" : value.cua3,
						"cua4" : value.cua4,
						"color" : color1,
						"color2" : color2,
						"color3" : color3,
						"color4" : color4
					}]
					/////
					color1 = colorSelect(value.po1);
					chartData13 = [{
						"titulo" : "Pobreza",
						"po1" : value.po1,
						"color" : color1
					}]
					///////
					color1 = colorSelect(value.adr1);
					color2 = colorSelect(value.adr2);

					chartData14 = [{
						"titulo" : "Adaptabilidad y resiliencia",
						"adr1" : value.adr1,
						"adr2" : value.adr2,
						"color" : color1,
						"color2" : color2
					}]
					///////
					color1 = colorSelect(value.sa1);
					color2 = colorSelect(value.sa2);
					chartData17 = [{
						"titulo" : "Salud",
						"sa1" : value.sa1,
						"sa2" : value.sa2,
						"color" : color1,
						"color2" : color2
					}]
					///////
					color1 = colorSelect(value.ed1);
					color2 = colorSelect(value.ed2);
					chartData18 = [{
						"titulo" : "Educación",
						"ed1" : value.ed1,
						"ed2" : value.ed2,
						"color" : color1,
						"color2" : color2,
					}]
					///////
					color1 = colorSelect(value.par1);
					chartData19 = [{
						"titulo" : "Participación",
						"par1" : value.par1,
						"color" : color1,
					}]
					///////
					color1 = colorSelect(value.fo1);
					color2 = colorSelect(value.fo2);
					color3 = colorSelect(value.fo3);
					color4 = colorSelect(value.fo4);
					chartData20 = [{
						"titulo" : "Fortaleza Institucional",
						"fo1" : value.fo1,
						"fo2" : value.fo2,
						"fo3" : value.fo3,
						"fo4" : value.fo4,
						"color" : color1,
						"color2" : color2,
						"color3" : color3,
						"color4" : color4
					}]
				}
			})

			$(".contenido-chart").css("display", "none");
			$(".buscador2,.titulo").css("display", "block");
			$("#chartdiv3").fadeIn("fast", function() {
				$(".botones .boton").each(function() {
					$(this).removeClass('active');
					var nombre = $(this).find("img").attr("src").replace("h.png", ".png");
					$(this).find("img").attr("src", nombre);
					$(this).css("display","inline-block")
					if ($(this).attr("href") == "#chartdiv3") {
						$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png", "h.png"));
					}
				})
				if ($(".botones").css("display") == "none") {
					$(".botones").fadeIn("fast");
				}
			});
			/*chart.dataProvider = chartData;
			 chart.validateData( );
			 chart.animateAgain( );*/
			chart2.dataProvider = chartData;
			chart2.validateData();
			chart2.animateAgain();
			//Datos chart 5
			chart5.dataProvider = chartData5;
			chart5.validateData();
			chart5.animateAgain();
			//Datos chart 6
			chart6.dataProvider = chartData6;
			chart6.validateData();
			chart6.animateAgain();
			//Datos chart 7
			chart7.dataProvider = chartData7;
			chart7.validateData();
			chart7.animateAgain();
			//Datos chart 8
			chart8.dataProvider = chartData8;
			chart8.validateData();
			chart8.animateAgain();
			//Datos chart 9
			chart9.dataProvider = chartData9;
			chart9.validateData();
			chart9.animateAgain();
			//Datos chart 10
			chart10.dataProvider = chartData10;
			chart10.validateData();
			chart10.animateAgain();
			//Datos chart 11
			chart11.dataProvider = chartData11;
			chart11.validateData();
			chart11.animateAgain();
			//Datos chart 12
			chart12.dataProvider = chartData12;
			chart12.validateData();
			chart12.animateAgain();
			//Datos chart 13
			chart13.dataProvider = chartData13;
			chart13.validateData();
			chart13.animateAgain();
			//Datos chart 14
			chart14.dataProvider = chartData14;
			chart14.validateData();
			chart14.animateAgain();
			//Datos chart 15
			chart15.dataProvider = chartData15;
			chart15.validateData();
			chart15.animateAgain();
			//Datos chart 16
			chart16.dataProvider = chartData16;
			chart16.validateData();
			chart16.animateAgain();
			//Datos chart 17
			chart17.dataProvider = chartData17;
			chart17.validateData();
			chart17.animateAgain();
			//Datos chart 18
			chart18.dataProvider = chartData18;
			chart18.validateData();
			chart18.animateAgain();
			//Datos chart 19
			chart19.dataProvider = chartData19;
			chart19.validateData();
			chart19.animateAgain();
			//Datos chart 20
			chart20.dataProvider = chartData20;
			chart20.validateData();
			chart20.animateAgain();
			//datos
			$("#chartdiv3").html("");
			$("#chartdiv1").html("");
			var comtipo;
			if (tipo == "Municipio") {
				comtipo = 'municipios modernos';
			} else {
				comtipo = 'ciudades modernas';
			}

			$("#chartdiv3").append('<div class="campo"><span class="titulo_item"><strong>Índice de ' + comtipo + '</strong></span><span class="valor_item">' + icmbvalor + '</span></div>');
			$("#chartdiv3").append('<div class="campo" id="campodimensiones"><strong>DIMENSIONES</strong></div>');
			$.each(chartData, function(index, value) {
				$("#chartdiv3").append('<div class="campo"><span class="titulo_item">' + value.source + '</span><span class="valor_item">' + value.energy + '</span></div>');
			})
			$.each(chartData, function(index, value) {

				var comm;
				if (value.energy > 60) {
					comm = value.conteo + "100.png";
				} else if (value.energy > 40) {
					comm = value.conteo + "70.png";
				} else {
					comm = value.conteo + "40.png";
				}
				$("#chartdiv1").append('<span class="t_item ' + value.conteo + 'boton"><img src="images/' + comm + '" class="responsive-img"/></span>');
			})
			$(".columder").mCustomScrollbar({
				axis : "y", // vertical and horizontal scrollbar
				updateOnContentResize : true
			});
			ciudad1 = 1;
			$(".cont-ciudades .quickselect__btn").each(function(index, value) {
				if ($(this).hasClass('active')) {
					$(".quickselect__btn").removeClass('active').removeClass('btn-primary');
					$(this).addClass("active").addClass("btn-primary");
				}
			})
		}
	});
	$('.button-collapse').sideNav({
		// Choose the horizontal origin
		closeOnClick : true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});
	$('#municipios2').on('change', function(event) {
		var valor = $(this).val();
		if (valor != "") {
			$(".buscador2").removeClass("activo")
			$(".cerrar2").data("destino2", valor)
			if ($(".content-charts").css("display") == "none") {
				$(".content-charts").css("display", "block");
				$(".columna-der").addClass("completo");
			}
			$("#mapdiv").addClass("efectozoom");
			$(".cont-ciudades").fadeOut("fast");
			$(".cont-ciudades2").fadeOut("fast");
			$(".tipo2").fadeOut("fast");
			var destino,
			    deftipo;
			$.each(ciudades, function(index, value) {
				if (value.id == valor) {
					destino = value.nombre;

					if (value.seccion != "" && value.seccion != undefined) {
						tipo = "Ciudad";
					} else {
						tipo = "Municipio";
					}
					colorx=colorSelect(value.Departamento);
					$(".ranking2").html("<div class='mun-tit' style='color:"+colorx+"'>" + value.ranking + "</div><br/>RANKING");
					$(".municipio2").html("<div class='mun-tit'>" + destino + "</div><br/>" + value.Departamento);
					$(".titulo2").css("display", "block");
					colory1 = colorSelect(chartData[0].energy);
					colory2 = colorSelect(chartData[1].energy);
					colory3 = colorSelect(chartData[2].energy);
					colory4 = colorSelect(chartData[3].energy);
					colory5 = colorSelect(chartData[4].energy);
					colory6 = colorSelect(chartData[5].energy);
					colory21 = colorSelect(value.cienciatecnologiaeinnovacion);
					colory22 = colorSelect(value.productividadcompetitividadycomplementariedad);
					colory23 = colorSelect(value.pazterritorial);
					colory24 = colorSelect(value.equidadeinclusion);
					colory25 = colorSelect(value.gobernanzaparticipacioneinstituciones);
					colory26 = colorSelect(value.sostenibilidad);
					chartDataC = [{
						source : "Ciencia, Tecnología e Innovación",
						conteo : "c",
						energy : chartData[0].energy,
						energy2 : value.cienciatecnologiaeinnovacion,
						color : colory1,
						color2 : colory21
					}, {
						source : "Productividad,\nCompetitividad y\nComplementariedad\nEconómica",
						conteo : "pr",
						energy : chartData[1].energy,
						energy2 : value.productividadcompetitividadycomplementariedad,
						color : colory2,
						color2 : colory22
					}, {
						source : "Paz Territorial",
						conteo : "p",
						energy : chartData[2].energy,
						energy2 : value.pazterritorial,
						color : colory3,
						color2 : colory23
					}, {
						source : "Equidad e Inclusión Social",
						conteo : "e",
						energy : chartData[3].energy,
						energy2 : value.equidadeinclusion,
						color : colory4,
						color2 : colory24
					}, {
						source : "Gobernanza,\nParticipación e\nInstituciones",
						conteo : "g",
						energy : chartData[4].energy,
						energy2 : value.gobernanzaparticipacioneinstituciones,
						color : colory5,
						color2 : colory25
					}, {
						source : "Sostenibilidad",
						conteo : "s",
						energy : chartData[5].energy,
						energy2 : value.sostenibilidad,
						color : colory6,
						color2 : colory26
					}];

				}
			})
			$(".columder").mCustomScrollbar({
				axis : "y", // vertical and horizontal scrollbar
				updateOnContentResize : true
			});
			$(".contenido-chart").css("display", "none");
			$(".buscador2,.titulo").css("display", "block");
			$("#chartdiv4").fadeIn("fast")
			$(".botones").css("display", "none");
			chart3.dataProvider = chartDataC;
			chart3.validateData();
			chart3.animateAgain();
			ciudad1 = 1;

		}
	});
	$('body').click(function(e) {
		if (!$(e.target).hasClass('buscador')) {
			$(".cont-ciudades").slideUp("fast");
		}
		if (!$(e.target).hasClass('buscador2')) {
			$(".cont-ciudades2").slideUp("fast");
		}

	});
	/*$(".menutop").on("click", function() {
		var destino = $(this).attr("href");
		$(".columna").fadeOut("fast", function() {
			$(destino).fadeIn("fast", function() {

			})
		})
		$('.button-collapse').sideNav('hide');
		return false;
	})*/
})
/* select alternativo */
jQuery.fn.select2OptionPicker = function(options) {
	return this.each(function() {
		var $ = jQuery;
		var select = $(this);
		var multiselect = select.attr('multiple');
		select.hide();

		var buttonsHtml = $('<div class="select2OptionPicker"></div>');
		var selectIndex = 0;
		var addOptGroup = function(optGroup) {
			if (optGroup.attr('label')) {
				buttonsHtml.append('<strong>' + optGroup.attr('label') + '</strong>');
			}
			var ulHtml = $('<ul class="select-buttons">');
			optGroup.children('option').each(function() {
				var img_src = $(this).data('img-src');
				var color = $(this).data('color');

				var liHtml = $('<li></li>');
				if ($(this).attr('disabled') || select.attr('disabled')) {
					liHtml.addClass('disabled');
					liHtml.append('<span>' + $(this).html() + '</span>');
				} else {

					if (color) {
						liHtml.append('<a href="#" style="background-color:' + color + '" data-select-index="' + selectIndex + '">&nbsp;</a>');
					} else if (img_src) {
						liHtml.append('<a href="#" data-select-index="' + selectIndex + '"><img class="image_picker" src="' + img_src + '"></a>');
					} else {
						liHtml.append('<a href="#" data-select-index="' + selectIndex + '">' + $(this).html() + '</a>');
					}
				}

				// Mark current selection as "picked"
				if ((!options || !options.noDefault) && $(this).attr('selected')) {
					liHtml.children('a, span').addClass('picked');
				}
				ulHtml.append(liHtml);
				selectIndex++;
			});
			clear = $("<div class='clear'></div>");
			buttonsHtml.append(ulHtml).append(clear);
		}
		var optGroups = select.children('optgroup');
		if (optGroups.length == 0) {
			addOptGroup(select);
		} else {
			optGroups.each(function() {
				addOptGroup($(this));
			});
		}

		select.after(buttonsHtml);

		buttonsHtml.find('a').click(function(e) {
			e.preventDefault();
			var clickedOption = $(select.find('option')[$(this).attr('data-select-index')]);

			if (multiselect) {
				if (clickedOption.attr('selected')) {
					$(this).removeClass('picked');
					clickedOption.removeAttr('selected');
				} else {
					$(this).addClass('picked');
					clickedOption.attr('selected', 'selected');
				}
			} else {
				if ($(this).hasClass('picked')) {
					$(this).removeClass('picked');
					clickedOption.removeAttr('selected');
					clickedOption.attr('selected', 'selected');
				} else {
					buttonsHtml.find('a, span').removeClass('picked');
					$(this).addClass('picked');
					clickedOption.attr('selected', 'selected');

				}
			}

			select.val(clickedOption.val())
			select.trigger('change');
		});
	});
};
$(window).load(function() {
	$(".loader").fadeOut("fast");
})
function colorSelect(value) {
	let colorf;
	if (value <= 100) {
		colorf = "#036B68"
	}
	if (value <= 80) {
		colorf = "#00A4A5"
	}
	if (value <= 60) {
		colorf = "#F2AD47"
	}
	if (value <= 40) {
		colorf = "#FF5F33"
	}
	if (value <= 20) {
		colorf = "#E5304E"
	}
	return colorf;

}
