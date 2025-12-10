function write(text) {
  document.getElementById('output').textContent = text;
}

function oppgave1a() {
  let i = 1;
  let out = '';
  while (i <= 10) {
    out += i + (i < 10 ? '\n' : '');
    i++;
  }
  write(out);
}

function oppgave1b() {
  let out = '';
  for (let i = 1; i <= 10; i++) {
    out += i + (i < 10 ? '\n' : '');
  }
  write(out);
}

function oppgave2a() {
  const riktig = 'hemmelig';
  while (true) {
    const svar = prompt('Skriv inn passord:');
    if (svar === riktig) {
      write('Riktig passord');
      return;
    }
  }
}

function oppgave2b() {
  const riktig = 'hemmelig';
  let forsok = 0;
  while (forsok < 3) {
    const svar = prompt('Skriv inn passord. Forsøk ' + (forsok + 1) + ' av 3:');
    if (svar === riktig) {
      write('Riktig passord');
      return;
    }
    forsok++;
  }
  write('Tre forsøk brukt. Tilgang nektet.');
}

function oppgave3() {
  let valg = prompt('Skriv "oddetall" eller "partall":');
  if (!valg) {
    write('Ingen valg gjort.');
    return;
  }
  valg = valg.trim().toLowerCase();
  let out = '';
  if (valg === 'oddetall' || valg === 'odde' || valg === 'odd') {
    for (let i = 1; i <= 99; i += 2) out += i + (i < 99 ? '\n' : '');
  } else {
    for (let i = 0; i <= 100; i += 2) out += i + (i < 100 ? '\n' : '');
  }
  write(out);
}

function oppgave4() {
  let out = '';
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) out += i + ' x ' + j + ' = ' + i * j + '\n';
    if (i < 10) out += '\n';
  }
  write(out);
}

