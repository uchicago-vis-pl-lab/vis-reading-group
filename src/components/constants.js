/* eslint-disable max-len*/
const UNKNOWN_PAPER = {
  paper: '????',
  authors: '??',
  venue: '',
  link: ''
};
export const history = [{
  date: '2/22/19',
  presenter: 'Andrew',
  quarter: 'Winter 2019',
  papers: [
    {
      paper: 'Agency plus automation: Designing artificial intelligence into interactive system',
      authors: 'Jeff Heer',
      venue: 'PNAS 2019',
      link: 'https://www.pnas.org/content/116/6/1844'
    }
  ]
}, {
  date: '3/1/19',
  presenter: 'Galen',
  quarter: 'Winter 2019',
  papers: [
    {
      paper: 'The Value of Visualization',
      authors: 'Jarke J. van Wijk',
      venue: 'IEEE Visualization, 2005',
      link: 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.442.2234&rep=rep1&type=pdf'
    }
  ]
}, {
  date: '3/8/19',
  presenter: 'Will',
  quarter: 'Winter 2019',
  papers: [
    {
      paper: 'When (ish) is My Bus? User-centered Visualizations of Uncertainty in Everyday, Mobile Predictive Systems',
      authors: 'Matthew Kay, Tara Kola, Jessica R. Hullman, and Sean A. Munson',
      venue: 'SIGCHI 2016',
      link: 'https://idl.cs.washington.edu/files/2016-WhenIsMyBus-CHI.pdf'
    }
  ]
}, {
  date: '3/15/19',
  presenter: 'Andrew',
  quarter: 'Winter 2019',
  papers: [
    {
      paper: 'Black Hat Visualization',
      authors: 'Michael Correll, Jeffrey Heer',
      venue: 'DECISIVe 2017',
      link: 'https://idl.cs.washington.edu/files/2017-BlackHatVis-DECISIVe.pdf'
    }
  ]
}, {
  date: '4/5/19',
  presenter: 'Teo',
  quarter: 'Spring 2019',
  papers: [
    {
      paper: 'An Information-theoretic Framework for Visualization',
      authors: 'Min Chen and Heike Jaenicke',
      venue: 'VIS 2010',
      link: 'https://cs.brynmawr.edu/Courses/cs380/fall2012/ChenJanicke2010.pdf'
    }
  ]
}, {
  date: '4/12/19',
  presenter: 'Andrew',
  quarter: 'Spring 2019',
  papers: [
    {
      paper: 'An Algebraic Process for Visualization Design',
      authors: 'Gordon Kindlmann and Carlos Scheidegger',
      venue: 'VIS 2014',
      link: 'http://vis.cs.ucdavis.edu/vis2014papers/TVCG/papers/2181_20tvcg12-kindlmann-2346325.pdf'
    }
  ]
}, {
  date: '4/19/19',
  presenter: 'Andrew',
  quarter: 'Spring 2019',
  papers: [
    {
      paper: 'Understanding Visualization: A Formal Approach Using Category Theory and Semiotics',
      authors: 'Paul Vickers, Joe Faith, and Nick Rossiter',
      venue: 'VIS 2013',
      link: 'https://uchicago-vis-pl-lab.github.io/vis-reading-group/assets/cat-semi.pdf'
    }
  ]
}, {
  date: '4/26/19',
  presenter: 'Galen',
  quarter: 'Spring 2019',
  papers: [
    {
      paper: 'Human-Computer Insurrection Notes on an Anarchist HCI',
      authors: 'Os Keyes, Josephine Hoy, and Margaret Drouhard',
      venue: 'CHI 2019',
      link: 'https://ironholds.org/resources/papers/anarchist_hci.pdf'
    }
  ]
}, {
  date: '5/7/19',
  presenter: 'Miranda',
  quarter: 'Spring 2019',
  papers: [
    {
      paper: 'Critical InfoVis: exploring the politics of visualization',
      authors: 'Marian Dörk, Christopher Collins, Patrick Feng, and Sheelagh Carpendale',
      venue: 'AltCHI 2013',
      link: 'https://mariandoerk.de/criticalinfovis/'
    },
    {
      paper: 'Feminist data visualization',
      authors: 'Catherine D’Ignazio, and Lauren F Klein',
      venue: 'Workshop on Visualization for the Digital Humanities (VIS4DH)',
      link: 'https://static1.squarespace.com/static/574dd51d62cd942085f12091/t/5c157dfe562fa7836b296000/1544912383037/Feminist_Data_Visualization.pdf'
    }
  ]
}, {
  date: '5/14/19',

  presenter: 'Julia',
  quarter: 'Spring 2019',
  papers: [UNKNOWN_PAPER]
}, {
  date: '5/21/19',
  presenter: 'Will',
  quarter: 'Spring 2019',
  papers: [
    {
      paper: 'Quality Metrics for Information Visualization',
      authors: 'M. Behrisch, M. Blumenschein, N. W. Kim, L. Shao, M. El-Assady, J. Fuchs, D. Seebacher, A. Diehl U. Brandes, H. Pfister, T. Schreck, and D. Weiskopf, D. A. Keim',
      venue: 'EuroVis 2018',
      link: 'https://bib.dbvis.de/uploadedFiles/QMSTAR_QualityMetricsForInformationVisualization_FINAL.pdf'
    }
  ]
}, {
  date: '5/28/19',
  presenter: 'Andrew',
  quarter: 'Spring 2019',
  papers: [UNKNOWN_PAPER]
}].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
/* eslint-enable max-len*/

export const quarterInfo = {
  'Winter 2019': {
    location: 'JCL 280',
    time: 'Fridays 12-1pm',
    order: 0
  },
  'Spring 2019': {
    location: 'JCL 239',
    time: 'Tuesdays 12:30',
    order: 1
  }
};
