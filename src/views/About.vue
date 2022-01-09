<template>
  <body class="body">
  <div id="stars">
    <div id="stars2">
      <div id="stars3">
      </div>
    </div>
  </div>
  <section class="wrapper">
    <div>
      <h1> About PlanIt</h1>
      <div class="picture">
        <img src="../assets/Planen.png" height="389" width="704" alt="Bild" style="float:right">
      </div>
      <h4 class="heading_2"> Leichter gemacht das Leben zu managen</h4>
      <p class="paragraph">Ein neues Semester hat begonnen und schon jetzt müssen der Großteil der Studierenden sich
        vielen Herausforderungen stellen.
        Von großen Projektarbeiten hin zu kleineren Abgaben und den schon bald bevorstehenden Semesterklausuren.
        Dabei die Übersicht zu verlieren, kann schon einmal schnell passieren.
        <br>
        <br>
        Wir haben die Lösung für euch: PlanIt!</p>
      <div class="work">
        <h3>Wie funktioniert PlanIt?</h3>
        <p>Nachdem man PlanIt aufgerufen hat gelangt man auf die Homepage. Von da aus kann man auf "Let's get started" klicken und
          damit gelangt man auf die "Calender"-Seite. Der Kalender ist eine tolle Übersicht von den ganzen Terminen, die der Nutzer
          erstellt hat. Mit einem Klick auf den Termin erhält man eine Einsicht in alle Informationen des Termins.
          Von dem Kalender aus kann man über die Taskleiste auf "Events" klicken.
          Dort erhält man eine Übersicht über alle erstellten Events und kann außerdem neue Events hinzufügen als auch bereits bestehende löschen.
          Außerdem kann man da dann neue Events erstellen oder auch andere Events löschen.
          <br>
          <br>
          Um einen Termin zu erstellen, muss man die freien Eingabefelder ausfüllen und danach auf "Create" klicken.
          <br>
          <br>
          Um einen Termin zu löschen muss man einfach auf den "Delete"-Knopf klicken.</p>
      </div>
    </div>
  </section>
  <div class="box">
    <div class="warum_planit">
      <h3>Warum PlanIt?</h3>
      <p>PlanIt ist ein sehr benutzerfreundliches Programm, das sehr übersichtlich und einfach anwendbar ist. Man kann in nur wenigen Sekunden einen Event erstellen und wieder löschen.</p>
    </div>
    <div class="für_wen">
      <h3>Für wen ist PlanIt?</h3>
      <p>PlanIt ist für jeden gedacht. Egal ob Schüler, Student oder sogar Unternehmensleiter. Jeder kann seinen Alltag
        mit PlanIt leichter planen und organisieren.</p>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
.wrapper {
  max-width: 100%;
  padding: 40px 20px 0 100px;
  text-align: left;
}

.heading_2 {
  padding-top: 10px;
}

.paragraph {
  max-width: 50%;
  padding-top: 10px;
}

.warum_planit {
  max-width: 55%;
  padding: 20px 100px 100px;
  text-align: left;
}

.für_wen {
  max-width: 50%;
  padding: 20px 100px 100px;
  text-align: left;
}

.box {
  padding-top: 20px;
  display: flex;
  width: 100%;
}

.picture {
  padding-right: 60px;
  padding-top: 40px;
}

.work{
  max-width: 50%;
  padding-top: 35px;
}
.body{
  overflow: hidden;
  height: 100vh;
  width: 100%;
  color: #fff;
  background: linear-gradient(#090042, #011c93, #090042);
}
</style>
