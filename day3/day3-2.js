const firstWire = 'R998,U502,R895,D288,R416,U107,R492,U303,R719,D601,R783,D154,L236,U913,R833,D329,R28,D759,L270,D549,L245,U653,L851,U676,L211,D949,R980,U314,L897,U764,R149,D214,L195,D907,R534,D446,R362,D6,L246,D851,L25,U925,L334,U673,L998,U581,R783,U912,R53,D694,L441,U411,L908,D756,R946,D522,L77,U468,R816,D555,L194,D707,R97,D622,R99,D265,L590,U573,R132,D183,L969,D207,L90,D331,R88,D606,L315,U343,R546,U460,L826,D427,L232,U117,R125,U309,R433,D53,R148,U116,L437,U339,L288,D879,L52,D630,R201,D517,L341,U178,R94,U636,L759,D598,L278,U332,R192,U463,L325,U850,L200,U810,L686,U249,L226,D297,R915,D117,R56,D59,R760,U445,R184,U918,R173,D903,R212,D868,L88,D798,L829,U835,L563,U19,R480,D989,R529,D834,R515,U964,L876,D294,R778,D551,L457,D458,R150,D698,R956,D781,L310,D948,R50,U56,R98,U348,L254,U614,L654,D359,R632,D994,L701,D615,R64,D507,R668,D583,L687,D902,L564,D214,R930,D331,L212,U943,R559,U886,R590,D805,R426,U669,L141,D233,L573,D682,L931,U267,R117,D900,L944,U667,L838,D374,L406,U856,R987,D870,R716,D593,R596,D654,R653,U120,L666,U145,R490,D629,R172,D881,L808,D324,R956,D532,L475,U165,L503,U361,R208,U323,R568,D876,R663,D11,L839,D67,R499,U75,L643,U954,R94,D418,R761,D842,L213,D616,L785,D42,R707,D343,L513,D480,L531,D890,L899,D2,L30,D188,R32,U588,R480,U33,R849,U443,L666,U117,L13,D974,L453,U93,R960,D369,R332,D61,L17,U557,R818,D744,L124,U916,L454,D572,R451,D29,R711,D134,R481,U366,L327,U132,L819,U839,R485,U941,R224,U531,R688,U561,R958,D899,L315,U824,L408,D941,R517,D163,L878,U28,R767,D798,R227'.split(
  ','
);
const secondWire = 'L1005,D527,R864,D622,R482,D647,R29,U459,R430,D942,R550,D163,L898,U890,L271,D216,L52,U731,R715,U925,L614,U19,R687,D832,L381,U192,L293,D946,L642,D2,L124,U66,R492,U281,R181,U624,R294,U767,R443,U424,R241,D225,R432,D419,L647,U290,L647,D985,L694,D777,L382,D231,R809,D467,L917,D217,R422,U490,L873,D537,R176,U856,L944,D875,L485,D49,R333,D220,L354,U789,R256,D73,R905,U146,R798,D429,R111,D585,L275,D471,R220,D619,L680,U757,R580,U497,L620,U753,R58,U574,L882,U484,R297,D899,L95,D186,R619,D622,R65,U714,L402,U950,R647,D60,L659,U101,L917,D736,L531,U398,R26,U134,R837,U294,R364,D55,R254,D999,R868,U978,R434,U661,R362,D158,L50,D576,L146,D249,L562,D433,R206,D376,L650,U285,L427,D406,L526,D597,R557,U554,L463,D157,L811,U961,R648,D184,L962,U695,R138,U661,L999,U806,L413,U54,L865,U931,L319,U235,L794,D12,L456,D918,L456,U214,L739,D772,R90,D478,R23,D658,R919,D990,L307,D534,L40,D324,L4,U805,L605,U534,R727,U452,R733,D416,L451,U598,R215,D545,L563,D222,L295,D669,R706,U11,R44,D392,L518,D437,L634,U874,L641,U240,L11,D279,L153,U601,L238,U924,L292,D406,L360,D203,R874,D506,R806,U9,R713,D891,L587,U538,L867,D637,R889,U186,R728,D672,R573,U461,R222,D703,R178,U336,L896,D924,L445,D365,L648,U3,L734,U959,R344,U314,R331,D929,L364,D937,L896,D191,R218,U256,L975,D506,R510,D392,R878,U896,L177,U4,R516,D873,R57,D530,R140,D827,L263,U848,L88,U309,L801,U670,R874,D358,L49,D259,L188,U419,R705,D498,R496,U576,R808,D959,L861,U437,L618,D112,R725,D546,R338,U879,R522,U892,R230,D367,R901,D737,L942,D689,R976,D369,R157'.split(
  ','
);
// const firstWire = [R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51];
// const secondWire = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
const startingPoint = { x: 0, y: 0, steps: 0 };

const step = (direction, currentLocation) => {
  let x = currentLocation.x;
  let y = currentLocation.y;
  let steps = currentLocation.steps;

  switch (direction) {
    case 'U':
      y++;
      steps++;
      break;
    case 'D':
      y--;
      steps++;
      break;
    case 'R':
      x++;
      steps++;
      break;
    case 'L':
      x--;
      steps++;
      break;
    default:
      break;
  }

  return { x, y, steps };
};

const goToLocation = (startingPoint, wire) => {
  let x = startingPoint.x;
  let y = startingPoint.y;
  let noOfSteps = startingPoint.steps;
  const wirePositions = [];

  for (let i of wire) {
    const direction = i.substring(0, 1);
    let steps = parseInt(i.substring(1));

    while (steps > 0) {
      const newLocation = step(direction, { x, y, steps: noOfSteps });
      x = newLocation.x;
      y = newLocation.y;
      noOfSteps = newLocation.steps;
      wirePositions.push(newLocation);
      steps--;
    }
  }

  return wirePositions;
};

const findCrossPoints = () => {
  const firstWirePositions = goToLocation(startingPoint, firstWire);
  const secondWirePositions = goToLocation(startingPoint, secondWire);
  const crossPoints = [];

  for (let i = 0; i < firstWirePositions.length; i++) {
    for (let j = 0; j < secondWirePositions.length; j++) {
      if (
        secondWirePositions[j].x === firstWirePositions[i].x &&
        secondWirePositions[j].y === firstWirePositions[i].y
      ) {
        crossPoints.push({ first: firstWirePositions[i], second: secondWirePositions[j] });
      }
    }
  }

  return crossPoints;
};

const findSteps = crossPoints => {
  let steps = crossPoints[0].first.steps + crossPoints[0].second.steps;

  crossPoints.map(location => {
    if (steps > location.first.steps + location.second.steps) {
      steps = location.first.steps + location.second.steps;
    }
  });

  return steps;
};

const crossPoints = findCrossPoints();

console.log(findSteps(crossPoints));
