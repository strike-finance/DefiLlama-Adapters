const { sumTokens2 } = require("../helper/chain/cardano");

const strikeStaking =
  "addr1z9yh4zcqs4gh78ysvh8nqp40fsnxg49nn3h6x25az9k8tms6409492020k6xml8uvwn34wrexagjh5fsk5xk96jyxk2qf3a7kj";
const strikeBatching =
  "addr1q9mqsgrgdaq9aahjfcrc6f45sgmcut4gu3c774kqzawkjkhujht5h40l2yrm8e7r2vwr2g3tv64pzjgnxwsztwg0yu5s00jz00";
const strikeTokenAddress =
  "f13ac4d66b3ee19a6aa0f2a22298737bd907cc95121662fc971b5275535452494b45";
const strikePerpsScript =
  "addr1wy2gch9ua0700a3dg423wxcwx4p886m4ny5u3aqs66sluqcly9uud";
const strikePerpsScriptV2 =
  "addr1z9nsxjyw7xgfw5jtfxcw7fxucte0277ununa4evyxcw3evg6409492020k6xml8uvwn34wrexagjh5fsk5xk96jyxk2q4366ry";
const strikeSnekPerpsScript =
  "addr1zy48lqwffvzkahcyrhj8982p3f7c002g098ly4zxzxefnlg6409492020k6xml8uvwn34wrexagjh5fsk5xk96jyxk2qst04fy";

async function tvl() {
  return await sumTokens2({
    owners: [
      strikePerpsScript,
      strikeBatching,
      strikePerpsScriptV2,
      strikeSnekPerpsScript,
    ],
  });
}

async function stake() {
  return await sumTokens2({
    owner: strikeStaking,
    tokens: [strikeTokenAddress],
  });
}

module.exports = {
  timetravel: false,
  cardano: {
    tvl,
    staking: stake,
  },
};
