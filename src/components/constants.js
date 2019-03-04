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
}].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
/* eslint-enable max-len*/

export const quarterInfo = {
  'Winter 2019': {
    location: 'JCL 280',
    time: 'Fridays 12-1pm'
  }
};
