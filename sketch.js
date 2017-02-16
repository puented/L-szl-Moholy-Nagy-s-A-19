function setup() {
    createCanvas(1024, 768);
}

function draw() {

    //LAYER 2

    fill(182, 181, 174);
    noStroke();
    rect(0, 0, 1024, 768);

    fill(91, 39, 31);
    noStroke();
    beginShape();
    vertex(943.7, 0);
    vertex(605.8, 452.9);
    vertex(830.3, 657.5);
    vertex(1024, 213.7);
    vertex(1024, 0);
    endShape();

    fill(184, 44, 33);
    noStroke();
    triangle(830.3, 657.5, 1025.3, 393.7, 1024, 212.3);

    fill(0, 0, 0);
    noStroke();
    quad(830.3, 657.7, 951.7, 769, 1025.3, 769, 1024, 763.5);

    fill(95, 39, 32);
    noStroke();
    triangle(831.4, 658.3, 783.5, 769, 954, 769);

    fill(75, 37, 26);
    noStroke();
    quad(748.5, 770, 829.3, 657.5, 831.4, 658.3, 783.9, 770);



    //LAYER 3

    fill(122, 44, 31);
    noStroke();
    quad(563, 507.7, 830.3, 657.5, 748.5, 770, 461.7, 769, 2500.4, 2063.4);

    fill(0, 0, 0);
    noStroke();
    beginShape();
    vertex(-1.3, 337.2);
    vertex(0.1, 583);
    vertex(340.5, 774);
    vertex(364, 774);
    vertex(405.9, 720);
    endShape();

    fill(94, 37, 31);
    noStroke();
    quad(402.1, 716.4, 453, 763.5, 450, 770, 366, 770);

    fill(79, 29, 20);
    noStroke();
    triangle(452.4, 763.4, 461.7, 769, 450.7, 768.5);

    fill(98, 39, 34);
    noStroke();
    beginShape();
    vertex(0, 195);
    vertex(-1.3, 337.2);
    vertex(401.6, 715.8);
    vertex(443.8, 725.7);
    vertex(486.2, 707.8);
    vertex(563, 507.7);
    vertex(563, 507.7);
    vertex(0, 195);
    endShape();

    fill(186, 86, 84);
    noStroke();
    beginShape();
    vertex(401.6, 715.8);
    vertex(563, 507.7);
    vertex(487.9, 700.9);
    vertex(460, 713.4);
    endShape();

    //Layer 4

    fill(186, 47, 33);
    noStroke();
    beginShape();
    vertex(0, 0);
    vertex(118, 0);
    vertex(707.7, 542.8);
    vertex(677.6, 571.9);
    vertex(0, 195);
    endShape();

    fill(136, 51, 29);
    noStroke();
    beginShape();
    vertex(636.1, 548.64);
    vertex(642.25, 541);
    vertex(652.25, 520.5);
    vertex(656.94, 504.29);
    vertex(659.36, 497.59);
    vertex(830.25, 657.46);
    endShape();

    fill(0, 0, 0);
    noStroke();
    triangle(784.7, 0, 563, 507.7, 949, 0);

    fill(143, 45, 23);
    noStroke();
    beginShape();
    vertex(401.61, 715.8);
    vertex(404.01, 714.41);
    vertex(416.48, 711.84);
    vertex(435.77, 706.8);
    vertex(470.51, 694.52);
    vertex(482.49, 689.03);
    vertex(484.2, 688);
    vertex(491.94, 695.25);
    vertex(461.42, 771.38);
    endShape();

    fill(145, 54, 49);
    noStroke();
    triangle(593.5, 437.7, 608, 451, 563, 507.7);

    // LAYER 5
    fill(230, 222, 204, 85);
    noStroke();
    ellipse(341.3, 383, 679.4, 675.2);

}
