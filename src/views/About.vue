<style>
.wrapper {
  max-width: 90%;
  padding: 100px 20px 100px 100px;
  text-align: left;
}

.heading_2 {
  padding-top: 10px;
}

.paragraph {
  max-width: 45%;
  padding-top: 10px;
}

.warum_planit {
  max-width: 50%;
  padding: 20px 100px 100px;
  text-align: left;
}

.für_wen {
  max-width: 50%;
  padding: 20px 100px 100px;
  text-align: left;
}

.box {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.picture {
  height: auto;
}
</style>

<template>
  <body>
  <div class="picture">
    <img src="../assets/planen.jpg" height="650" width="850" alt="Bild" style="float:right">
  </div>
  <section class="wrapper">
    <div>
      <h1> About PlanIt</h1>
      <h4 class="heading_2"> Leichter gemacht das Leben zu managen</h4>
      <p class="paragraph">Ein neues Semester hat begonnen und schon jetzt müssen der Großteil der Studierenden sich
        vielen Herausforderungen stellen.
        Von großen Projektarbeiten hin zu kleineren Abgaben und den schon bald bevorstehenden Semesterklausuren.
        Dabei die Übersicht zu verlieren, kann schon einmal schnell passieren.
        <br>
        Wir haben die Lösung für euch: PlanIt!</p>
    </div>
  </section>
  <div class="box">
    <div class="warum_planit">
      <h3>Warum PlanIt?</h3>
      <p>PlanIt ist ein sehr benutzerfreundliches Programm, das sehr übersichtlich und einfach anwendbar ist.</p>
    </div>
    <div class="für_wen">
      <h3>Für wen ist PlanIt?</h3>
      <p>PlanIt ist für jeden gedacht. Egal ob Schüler, Student oder sogar Unternehmensleiter. Jeder kann seinen Alltag
        mit PlanIt leichter planen und organisieren.</p>
    </div>
  </div>
  </body>
</template>
