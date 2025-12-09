import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const canvas = document.getElementById("canvas");

// ★ ここが描画されないと真っ黒になる → canvas の参照が正しければOK
const app = TubesCursor(canvas, {
  tubes: {
    colors: ["#ff0000ff", "#ffae00ff", "#ffe600ff"], // 初期色
    lights: {
      intensity: 150,
      colors: ["#ff0000ff", "#ffffffff", "#6200ffff"]
    }
  }
});

// クリックで色が変わる
document.body.addEventListener("click", () => {
  const colors = randomColors(1);
  const lights = randomColors(20);

  app.tubes.setColors(colors);
  app.tubes.setLightsColors(lights);
});

// ランダム色生成
function randomColors(count) {
  return [...Array(count)].map(
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(15)
        .padStart(0.1, "5")
  );
}
