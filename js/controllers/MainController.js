function readJSON (file) {
  var xmlhttp = new XMLHttpRequest()
  var url = file
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var finalJSON = JSON.parse(this.responseText)
    }
  }
  xmlhttp.open('GET', url, true)
  xmlhttp.send()
  return finalJSON
}
app.controller('News', ['$scope',
  function ($scope) {
    $scope.lastChange = new Date('2017', '2', '28')
    $scope.lastNews = [
      {
        title: 'SHA-1 é declarado morto pela google: primeira colisão de hash',
        date: new Date('2017', '2', '28'),
        link: 'http://shattered.io'
      }
    ]
  }])
app.controller('PostList', ['$scope',
  ($scope) => {
    $scope.postTexts = [
      {
        title: 'Cifra de Vigenère, e quebrando ela',
        text: '&emsp;Eu consegui quebrar a cifra de Vigenère usando apenas algumas análises estatísticas. Esse post é pra explicar como isso aconteceu, e é' +
            ' uma boa introdução pra quem quer brincar de criptografia. <a target="_blank" href="https://github.com/pedro823/VigenereCipher">Link para o github do projeto.</a>',
        date: new Date('2017', '5', '4'),
        wholeText: '&emsp;Eu consegui quebrar a cifra de Vigenère usando apenas algumas análises estatísticas. Esse post é pra explicar como isso aconteceu, e é' +
            ' uma boa introdução pra quem quer brincar de criptografia. <a target="_blank" href="https://github.com/pedro823/VigenereCipher">Link para o github do projeto.</a>' +
            ' <br>&emsp;Conhecimentos prévios necessários para entender como o algoritmo funciona: <a target="_blankk" href="https://en.wikipedia.org/wiki/Caesar_cipher">Cifra de César</a>,' +
            ' <a target="_blank" href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">cifra de Vigenère</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Frequency_analysis">Análise de frequência</a>,' +
            ' e Python para ler o código.' +
            '<br>&emsp;Para quebrar a cifra, é necessário saber a tabela de frequência da língua na qual a mensagem está codificada. No meu exemplo, utilizei a língua inglesa.' +
            ' <a href="">Nessa imagem</a>, é possível perceber que a letra \'e\' é a que mais aparece (por volta de 12%) no inglês, seguida pela letra \'t\' e a letra \'a\'. Isso é utilizado, primeiramente, para chutar' +
            ' o tamanho da chave no texto: primeiro, note que, dado tamanho de chave n, a letra 0 será encriptada com a letra 0 da chave, a letra 1 com a letra 1 da chave...' +
            ' a letra n-1 do texto com a letra n-1 da chave, e a letra n do texto... de volta com a letra 0 da chave. Portanto, ao separar o texto em n segmentos, cada sequência de letras' +
            ' é composta pelas letras que foram encriptadas pela mesma letra da chave.<br>&emsp;Então, após chutar um tamanho de chave e separar o texto em segmentos, o problema se reduz em várias cifras de César.' +
            ' Logo, é necessário resolver essas cifras comparando cada \'shift\' possível (de +0 a +25) com a tabela de frequência do inglês, e assim ver qual é a letra mais plausível. Se mesmo a letra mais plausível' +
            ' ainda é muito distante da tabela inglesa (definindo distância de uma tabela a outra pelo <a href="https://en.wikipedia.org/wiki/Chi-squared_test">teste chi-quadrado</a> com 25 graus de liberdade), ' +
            'é porque o tamanho da chave está errado em primeiro lugar (e assim volta-se ao começo). Se todas as letras passarem do teste de distância, então foi encontrada uma chave plausível.',
        postNo: '00006',
        code: '<span style="color: #7d00b7;">for</span> i <span style="color: #7d00b7">in</span> <span style="color: #be0000">self</span>.text:' +
                        '<br>&emsp;&emsp;<span style="color: #7d00b7">if</span> i <span style="color: #7d00b7">not in</span> VigenereCracker.AllowedCharacters:' +
                            '<br>&emsp;&emsp;&emsp;&emsp;fragment[counter % size] += i' +
                            '<br>&emsp;&emsp;&emsp;&emsp;counter += <span style="color: #ba8003">1</span>'
      },
      {
        title: 'IMEsec',
        text: '&emsp;Há um novo grupo de extensão no IME surgindo: O grupo de segurança da informação, chamado IMEsec.',
        date: new Date('2017', '5', '4'),
        wholeText: '&emsp;Há um novo grupo de extensão no IME surgindo: O grupo de segurança da informação, chamado IMEsec.' +
            '<br>Esse grupo começou sendo uma ideia que alguns ingressantes de 2017 tiveram no começo do ano, que logo virou um chat de Telegram entre mim, alguns' +
            ' representantes do BCC-IME, e alguns outros veteranos interessados em engenharia reversa, exploits de web, e criptografia. Começamos a nos reunir toda sexta-feira' +
            ' e assim o grupo começou a \'engatar\'. Estamos trabalhando para conseguir acesso a alguns laboratórios (principalmente o de extensão - LabX), e logo mais vamos divulgar' +
            ' nossa existência. Se você (do IME) estiver interessado em entrar nesse grupo, ou consiga contato de algum de nós com alguém, ou mande um e-mail pra mim em' +
            ' <i>razgrizone arroba linux ponto ime ponto usp ponto br</i>.',
        postNo: '00005',
        code: 'int main() {<br>&emsp;char buffer[200];<br>&emsp;// exploit me!<br>&emsp;gets(buffer);<br>&emsp;return 0<br>}'
      },
      {
        title: 'Começando a migração para Ruby',
        text: '&emsp;Embora a rede linux não suporte criação e manutenção de um servidor rails para os sites daqui, começei a migrar meu site para' +
            ' ruby on rails, para ver se funcionaria de um jeito legal. Assim, a criação de posts seria muito, muito mais fácil, e fora a experiência' +
            ' que eu vou adquirir. Hackathons seriam 100x mais fáceis se eu souber rails na ponta da língua, por exemplo, criando databases rapidamente e' +
            ' fazendo o site ser um site, sem nenhum mocking.',
        date: new Date('2017', '2', '3'),
        wholeText: '&emsp;Embora a rede linux não suporte criação e manutenção de um servidor rails para os sites daqui, começei a migrar meu site para' +
            ' ruby on rails, para ver se funcionaria de um jeito legal. Assim, a criação de posts seria muito, muito mais fácil, e fora a experiência' +
            ' que eu vou adquirir. Hackathons seriam 100x mais fáceis se eu souber rails na ponta da língua, por exemplo, criando databases rápidos e' +
            ' fazendo o site ser um <b>site</b> sem nenhum mocking.',
        postNo: '00004',
        code: '&lt;% posts.each do |p| %&gt;<br>&emsp;&emsp;&lt;%= p.title %&gt;<br>&lt;% end %&gt;'
      },
      {
        title: 'Canais de Youtube relacionados a programação',
        text: '&emsp;Há um tempo, venho recomendando alguns canais de Youtube para amigos e ' +
            'colegas de classe. Decidi então fazer uma lista de alguns canais, a maioria sem muito reconhecimento, que alguns podem se interessar.',
        date: new Date('2016', '9', '29'),
        wholeText: '&emsp;Há um tempo, venho recomendando alguns canais de Youtube para amigos e ' +
            'colegas de classe. Decidi então fazer uma lista de alguns canais, a maioria sem muito reconhecimento, que alguns podem se interessar.' +
            '<br><em>Todos os nomes contém links para o canal.</a></em>' +
            '<br><a href="https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A" target="_blank"><b>Sirajology</b></a><br>' +
            'Um canal que utiliza muito a maleabilidade da linguagem Python para fazer tudo: desde redes neurais e machine learning até data science' +
            ' e análise sentimental. Os vídeos são bastante "mão na massa", então é pouca explicação e bastante código.' +
            '<br><a href="https://www.youtube.com/user/devcentral" target="_blank"><b>F5 DevCentral</b></a><br>' +
            'Esse canal é da <a href="http://f5.com" target="_blank">f5 networks</a>, que trabalha com serviços de proteção de DDoS, cloud, escala de DNS e mais. ' +
            'No canal, além de um monte de vídeos explicando como usar os programas deles, há vídeos sobre alguns métodos de criptografia, como a ECC (Elyptic curve criptography),' +
            ' e tokenização de dados. Os vídeos desse tipo são meio raros no canal, mas vale dar uma olhada mesmo assim.' +
            '<br><a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" target="_blank"><b>3Blue1Brown</b></a><br>' +
            'Explica, de uma maneira fácil de compreender, assuntos matemáticos como álgebra linear, fractais, curvas que preenchem espaço, música, e muito mais.' +
            ' O autor sempre visa a intuitividade - sem anotar nada, você sai do vídeo sabendo mais.' +
            '<br><a href="https://www.youtube.com/channel/UCqbkm47qBxDj-P3lI9voIAw" target="_blank"><b>danooct1</b></a><br>' +
            'Um canal muito mais de diversão, que pega malwares antigos para DOS, Windows 95, 98, ME e XP, e até alguns sistemas operacionais inesperados, ' +
            'como Symbian para Smartphones antigos, e testa eles na frente da câmera. É muito interessante ver como o rumo de malwares mudou de "tela azul mortal"' +
            ' para malwares silenciosos que roubam seus dados sem você saber.' +
            '<br><a href="https://www.youtube.com/user/gigafide" target="_blank"><b>Tinkernut</b></a> e <a href="https://www.youtube.com/channel/UCipr-y52SQGyMX-CQ2xk3jA" target="_blank"><b>Tinkernut Labs</b></a><br>' +
            'Para os que gostam de Arduino, Raspberry Pi, Internet of Things e Hacking, esse canal é para vocês. O host ensina a fazer servidores de e-mail, um smartwatch a partir de peças velhas, ' +
            'um cluster computer de Raspberry Pis, câmeras de segurança e muito mais.' +
            '<br><a href="https://www.youtube.com/channel/UCNovoA9w0KnxyDP5bGrOYzg" target="_blank"><b>Tek Syndicate</b></a><br>' +
            'Um canal de notícias de hardware de computador. Eu faria um post inteiro sobre canais de hardware, mas pus esse aqui porque o podcast deles, "The Tek",' +
            ' é um podcast que ao mesmo tempo é relaxante, é bem informativo.' +
            '<br><a href="https://www.youtube.com/user/standupmaths" target="_blank"><b>Standupmaths</b></a><br>' +
            'Um matemático que faz shows de standup. Embora no canal dele não tenha os shows que ele faz, ele sempre traz assuntos muito interessantes para falar, como' +
            ' "Por que a TV NTSC é 29.97 frames por segundo?", "Quantos vídeos de Youtube são possíveis de serem feitos?", e mais.' +
            '<br><a href="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA" target="_blank"><b>Computerphile</b></a><br>' +
            'Óbvio.',
        postNo: '00003',
        code: ''
      },
      {
        title: 'Por que "Razgriz One?"',
        text: '&emsp;Me perguntam "por que Razgriz One?" bastante.' +
            '<br>&emsp;<b>Razgriz</b> vem de um jogo para Playstation 2 chamado Ace Combat 5: The Unsung War.' +
            ' É um jogo de guerra de aviões-caça.',
        date: new Date('2016', '9', '28'),
        wholeText: '&emsp;Me perguntam "por que Razgriz One?" bastante.' +
            '<br>&emsp;<b>Razgriz</b> vem de um jogo para Playstation 2 chamado <b>Ace Combat 5: The Unsung War </b>.' +
            ' É um jogo de guerra de aviões-caça. Um resumo curto da história do jogo,' +
            ' é uma guerra entre os países Osea e Yuktobania, dentro do mundo de <a href="http://acecombat.wikia.com/wiki/Strangereal" target="_blank">Strangereal</a>' +
            ', um mundo muito parecido com a Terra. <br>&emsp;Desde a declaração de guerra, Nenhum dos presidentes dos dois países havia entrado novamente em seus escitórios: ' +
            'Os dois foram capturados antes da guerra, mantidos em uma prisão no Norte, e todas as suas declarações haviam sido forjadas pelos generais superiores de cada país.' +
            ' O esquadrão do jogador, primeiramente chamado de Wardog, é o primeiro a descobrir a verdade, e fazer tudo a parar a guerra.' +
            ' O termo vem de <a href="https://youtu.be/Hz8HTPGQpBU?t=1h21m22s" target="_blank">uma lenda</a> do jogo, descrita em um poema: <em>' +
            '<br><br>The Demon of Razgriz <br><br> (The Demon of the North Sea) <br><br>' +
            '<br>When history witnesses a great change, Razgriz reveals itself, first as a dark demon.' +
            "<br>As a demon, it uses it's power to rain death upon the land, and then it dies" +
            '<br>However, after a period of slumber, Razgriz returns...' +
            '<br><br>Amidst the eternal waves of time' +
            '<br>From a ripple of change shall the storm rise' +
            '<br>Out of the abyss peer the eyes of a demon' +
            '<br>Behold the Razgriz, its wings of black sheath' +
            '<br><br>The demon soars through dark skies' +
            '<br>Fear and death trail its shadow beneath' +
            '<br>Until men united wield a hallowed sabre' +
            '<br>In final reckoning, the beast is slain' +
            '<br><br>As the demon sleeps, man turns on man' +
            '<br>His own blood and madness soon cover the earth' +
            '<br>From the depths of despair awaken the Razgriz' +
            '<br>Its raven wings ablaze in majestic light.' +
            '<br><br></em>&emsp;Basicamente, essa lenda conta de um demônio residente do mar do Norte, que ao nascer destrói tudo que vê, até ser derrotado.' +
            ' Ele ressurge como um fantasma, mas quando isso acontece, ele semeia bondande pela terra.' +
            '<br>&emsp;Depois de uma parte do jogo, inimigos começam a utilizar esse conto para <a href="https://youtu.be/Hz8HTPGQpBU?t=2h37m" target="_blank">referir-se ao esquadrão Wardog</a>.' +
            ' Para eles, o esquadrão é igual ao demônio de Razgriz - destruindo tudo que passam sobre, e imparáveis.' +
            ' O esquadrão acata o nome após um tempo. após <a href="https://youtu.be/Hz8HTPGQpBU?t=2h1m20s" target="_blank">esse acontecimento</a>, os pilotos são reconhecidos como abatidos, mas são recuperados e ' +
            'trocam seus nomes para Razgriz. A partir daí, fazem de tudo para parar a guerra.' +
            '<br>Razgriz One seria o primeiro piloto do esquadrão, e é esse o nome que escolhi.',
        postNo: '00002',
        code: ''
      },
      {
        title: 'Site agora está live!',
        text: 'O website agora se encontra vivo. Foi escrito do zero,' +
            ' usando as bibliotecas: <br>&emsp;<b>CSS:</b> w3-css, Bootstrap e Animate-css <br>&emsp;<b>Javascript:</b> AngularJS',
        date: new Date('2016', '9', '26'),
        wholeText: 'O website agora se encontra vivo. Foi escrito do zero,' +
            ' usando as bibliotecas: <br>&emsp;<b>CSS:</b> w3-css, Bootstrap e Animate-css <br>&emsp;<b>Javascript:</b> AngularJS',
        postNo: '00001',
        code: 'int main() {<br>&emsp;&emsp;printf("Hello world!\\n");<br>&emsp;&emsp;return 0;<br>}'
      }
    ]
    $scope.openSec = function (event) {
      var obj = event.target.nextElementSibling
      if (obj.className.indexOf('w3-show') == -1) {
        obj.className += ' w3-show'
        obj.previousElementSibling.className = obj.previousElementSibling.className.replace(' w3-black', ' w3-red')
      } else {
        obj.className = obj.className.replace(' w3-show', '')
        obj.previousElementSibling.className = obj.previousElementSibling.className.replace(' w3-red', ' w3-black')
      }
    }
  }])
app.controller('PDFlist', ['$scope',
  function ($scope) {
    $scope.pdfs = [
      {
        title: 'RTFM: Red Team Field Manual',
        description: 'Não, não é <i>Read The Fucking Manual</i>, esse manual é de grande auxílio para iniciantes em linux.',
        link: 'https://watchthestack.files.wordpress.com/2015/03/rtfm-red-team-field-manual.pdf'
      },
      {
        title: 'Black Hat Python: Python programming for hackers and pentesters',
        description: 'Uma ótima fonte de Python para testes de penetração.',
        link: 'https://pythonizame.s3.amazonaws.com/media/Book/black-hat-python/file/af0ef90e-83cf-11e5-964d-04015fb6ba01.pdf'
      },
      {
        title: 'The Web Application Hacker\'s Handbook',
        description: 'Livro que trata sobre exploits na web e como achá-las.',
        link: 'https://leaksource.files.wordpress.com/2014/08/the-web-application-hackers-handbook.pdf'
      }
    ]
  }])
app.controller('ProjectList', ['$scope',
  function ($scope) {
    // $scope.projects = readJSON('https://linux.ime.usp.br/~razgrizone/info/projectList.json');
    $scope.projects = [
      {
        title: 'HackathonUSP 2017',
        type: 'Hackathon',
        description: 'Participação no HackathonUSP do segundo semestre de 2017, de tema \'Ética em pesquisa científica\'.' +
                     '<br>O grupo contou com Pedro Pereira, Bruno Carneiro, Daniel Martinez e Artur Magalhães.',
        date: new Date('2017', '11', '6'),
        image: 'hackathonusp2017.jpg',
        'subtitle': 'Eu, Daniel e Artur desenhando o que faríamos.',
        link: 'https://hackathonusp2017.devpost.com/submissions'
      },
      {
        title: 'Capture The Flag CryptoRave 2017',
        type: 'Capture The Flag',
        description: 'Segundo lugar no Capture The Flag da <a href="https://cryptorave.org/">CryptoRave</a> de 2017. Os desafios eram sobre vários ambitos de <i>hacking</i>:' +
            ' binary reversing, exploits de web, steganografia, quebrar uma wi-fi, e até mesmo lockpicking. Formamos um time na hora, o time \'lambda\', que até o final do dia, somou 1040 pontos' +
            ' e ficou em segundo lugar na competição.',
        date: new Date('2017', '5', '6'),
        image: 'CTFCR2017.jpg',
        subtitle: 'Time lambda, junto com os organizadores do evento.',
        link: 'https://shellterlabs.com/en/ctf-master/cryptorave/cryp70-ch405-2017/'
      },
      {
        title: 'HackathonUSP 2016',
        type: 'Hackathon',
        description: 'Menção honrosa na participação do Hackathon feito pela USP em colaboração com a IBM.' +
            '<br>O grupo foi composto por Pedro Pereira, Raphael Gusmão, Breno Helfstein e Caio Lopes. O grupo focou no tema "Ética em desenvolvimento e pesquisa",' +
            ' e fez um website com o intuito de aprimorar o ensino da ética em pesquisa por meio de perguntas e respostas.' +
            '<br>O projeto pode ser conferido <a href="http://aprendetica.herokuapp.com/">aqui</a>.<br><em>Feito em HTML, CSS, PHP e javascript, utilizando a framework Laravel</em>',
        date: new Date('2016', '10', '6'),
        image: 'hackUSP.jpg',
        subtitle: 'Nosso workspace durante o Hackathon',
        link: 'https://devpost.com/software/aprendetica'
      },
      {
        title: 'Simulador da lei fraca dos grandes números',
        type: 'Site',
        description: 'Website desenvolvido em colaboração com <a href="http://linux.ime.usp.br/~robotenique" target="_blank">Juliano Garcia.</a>' +
            '<br>Utiliza de tecnologias como chartJS para mostrar um gráfico dinâmico, que demonstra a' +
            ' <a href="https://pt.wikipedia.org/wiki/Lei_dos_grandes_n%C3%BAmeros" target="_blank">Lei Fraca dos Grandes Números</a>.<br>' +
            'Um projeto feito para a aula de introdução à estatística.',
        date: new Date('2016', '9', '25'),
        image: 'WeakLaw',
        subtitle: 'gráfico-exemplo de nosso website',
        link: 'https://github.com/GreaterNumbersLaw/website'
      },
      {
        title: 'Brasil Game Jam 2016',
        type: 'Game Jam',
        description: 'Participação da Brasil Game Jam de 2016, ficando entre os Top 5 times participantes.' +
            '<br>Os times envolvidos foram desafiados a fazer um jogo dentro de 48h, dentro da maior feira de games' +
            ' da américa latina: a <a href="http://www.brasilgameshow.com.br/" target="_blank">Brasil Game Show.</a>' +
            '<br>Junto com Guilherme Moura (EACH-USP) e Marcelo Prado (Insper), "Os Gracinhas" fizeram um jogo mobile ' +
            'viciante, que conquistou os votos de visitantes da exposição no domingo. <a href="https://gracinhas.itch.io/">' +
            'Confira o jogo aqui.</a>',
        date: new Date('2016', '7', '24'),
        image: 'BGJ2016.jpg',
        subtitle: 'Foto de nosso workspace durante o desafio, dentro da Brasil Game Show',
        link: 'http://globouniversidade.globo.com/page/projetos/ansiedade-e-expectativa-marcaram-o-ultimo-dia-da-globo-na-bgs'
      }
    ]
  }])
app.controller('SandboxList', ['$scope',
  ($scope) => {
    $scope.sandbox = [
      {
        title: 'XSS Sandbox',
        description: 'Faz tempo que não posto nada nesse site, né? <br />\
        Aqui está um site para testar suas capacidades de XSS! \
        (Lembre de não usar chrome para esse experimento. O Chrome desabilita a página caso ele \
          detecte XSS.) <br /> \
          Não sabe o que é XSS? <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">O site da OWASP explica a fundo.</a><br />',
        link: 'sandbox/xss.php',
        date: new Date('2017', '11', '5')
      }
    ]
  }])
