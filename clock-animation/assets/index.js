var tl = gsap.timeline({
  defaults: { duration: 0.25, ease: "none" },
  repeat: -1,
});
tl.to(".dots:not(.dot-one)", { rotate: "+=30" });

tl.to(".dots:not(.dot-one):not(.dot-two)", { rotate: "+=30" });
tl.to(".dots.dot-two > span", { top: 0 }, "<");

tl.to(".dots:not(.dot-one):not(.dot-two):not(.dot-three)", { rotate: "+=30" });
tl.to(".dots.dot-three > span", { top: 0 }, "<");

tl.to(".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four)", {
  rotate: "+=30",
});
tl.to(".dots.dot-four > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-five > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-six > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six):not(.dot-seven)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-seven > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six):not(.dot-seven):not(.dot-eight)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-eight > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six):not(.dot-seven):not(.dot-eight):not(.dot-nine)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-nine > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six):not(.dot-seven):not(.dot-eight):not(.dot-nine):not(.dot-ten)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-ten > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six):not(.dot-seven):not(.dot-eight):not(.dot-nine):not(.dot-ten):not(.dot-eleven)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-eleven > span", { top: 0 }, "<");

tl.to(
  ".dots:not(.dot-one):not(.dot-two):not(.dot-three):not(.dot-four):not(.dot-five):not(.dot-six):not(.dot-seven):not(.dot-eight):not(.dot-nine):not(.dot-ten):not(.dot-eleven):not(.dot-twelve)",
  { rotate: "+=30" }
);
tl.to(".dots.dot-twelve > span", { top: 0 }, "<");

