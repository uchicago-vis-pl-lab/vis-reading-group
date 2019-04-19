/* eslint-disable max-len*/
export const history = [{
  date: '2/22/19',
  paper: 'Agency plus automation: Designing artificial intelligence into interactive system',
  authors: 'Jeff Heer',
  venue: 'PNAS 2019',
  link: 'https://www.pnas.org/content/116/6/1844',
  presenter: 'Andrew',
  quarter: 'Winter 2019'
}, {
  date: '3/1/19',
  paper: 'The Value of Visualization',
  authors: 'Jarke J. van Wijk',
  venue: 'IEEE Visualization, 2005',
  link: 'http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.442.2234&rep=rep1&type=pdf',
  presenter: 'Galen',
  quarter: 'Winter 2019'
}, {
  date: '3/8/19',
  paper: 'When (ish) is My Bus? User-centered Visualizations of Uncertainty in Everyday, Mobile Predictive Systems',
  authors: 'Matthew Kay, Tara Kola, Jessica R. Hullman, and Sean A. Munson',
  venue: 'SIGCHI 2016',
  link: 'https://idl.cs.washington.edu/files/2016-WhenIsMyBus-CHI.pdf',
  presenter: 'Will',
  quarter: 'Winter 2019'
}, {
  date: '3/15/19',
  paper: 'Black Hat Visualization',
  authors: 'Michael Correll, Jeffrey Heer',
  venue: 'DECISIVe 2017',
  link: 'https://idl.cs.washington.edu/files/2017-BlackHatVis-DECISIVe.pdf',
  presenter: 'Andrew',
  quarter: 'Winter 2019'
}, {
  date: '4/5/19',
  paper: 'An Information-theoretic Framework for Visualization',
  authors: 'Min Chen and Heike Jaenicke',
  venue: 'VIS 2010',
  link: 'https://cs.brynmawr.edu/Courses/cs380/fall2012/ChenJanicke2010.pdf',
  presenter: 'Teo',
  quarter: 'Spring 2019'
}, {
  date: '4/12/19',
  paper: 'An Algebraic Process for Visualization Design',
  authors: 'Gordon Kindlmann and Carlos Scheidegger',
  venue: 'VIS 2014',
  link: 'http://vis.cs.ucdavis.edu/vis2014papers/TVCG/papers/2181_20tvcg12-kindlmann-2346325.pdf',
  presenter: 'Will',
  quarter: 'Spring 2019'
}, {
  date: '4/19/19',
  paper: 'Understanding Visualization: A Formal Approach Using Category Theory and Semiotics',
  authors: 'Paul Vickers, Joe Faith, and Nick Rossiter',
  venue: 'VIS 2013',
  link: 'https://uchicago-vis-pl-lab.github.io/vis-reading-group/assets/cat-semi.pdf',
  presenter: 'Andrew',
  quarter: 'Spring 2019'
}, {
  date: '4/26/19',
  paper: 'Human-Computer Insurrection Notes on an Anarchist HCI',
  authors: 'Os Keyes, Josephine Hoy, and Margaret Drouhard',
  venue: 'CHI 2019',
  link: 'https://ironholds.org/resources/papers/anarchist_hci.pdf',
  presenter: 'Galen',
  quarter: 'Spring 2019'
}, {
  date: '5/3/19',
  paper: 'Critical InfoVis: exploring the politics of visualization',
  authors: 'Marian Dörk, Christopher Collins, Patrick Feng, and Sheelagh Carpendale',
  venue: 'AltCHI 2013',
  link: 'https://mariandoerk.de/criticalinfovis/',
  presenter: 'Miranda',
  quarter: 'Spring 2019'
}, {
  date: '5/10/19',
  paper: 'What May Visualization Processes Optimize?',
  authors: 'Min Chen, Amos Golan',
  venue: 'VIS 2016',
  link: 'https://arxiv.org/abs/1506.02245',
  presenter: 'Nick',
  quarter: 'Spring 2019'
}, {
  date: '5/17/19',
  paper: 'Quality Metrics for Information Visualization',
  authors: 'M. Behrisch, M. Blumenschein, N. W. Kim, L. Shao, M. El-Assady, J. Fuchs, D. Seebacher, A. Diehl U. Brandes, H. Pfister, T. Schreck, and D. Weiskopf, D. A. Keim',
  venue: 'EuroVis 2018',
  link: 'https://bib.dbvis.de/uploadedFiles/QMSTAR_QualityMetricsForInformationVisualization_FINAL.pdf',
  presenter: '????',
  quarter: 'Spring 2019'
}].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
/* eslint-enable max-len*/

export const quarterInfo = {
  'Winter 2019': {
    location: 'JCL 280',
    time: 'Fridays 12-1pm',
    order: 0
  },
  'Spring 2019': {
    location: 'JCL 354',
    time: 'Fridays 12:30',
    order: 1
  }
};
