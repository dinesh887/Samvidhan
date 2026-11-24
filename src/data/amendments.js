// Migrated from the existing MySamvidhan amendments overview. Detail fields stay
// optional until verified explanatory copy and primary references are available.
export const amendments = [
  { slug: '1st-amendment-1951', number: 1, year: 1951, title: 'Reasonable Restrictions & Land Reform', summary: 'Added grounds for reasonable restrictions on free speech and shielded land reform laws from certain court challenges.', topics: ['speech', 'land reform'] },
  { slug: '42nd-amendment-1976', number: 42, year: 1976, title: 'The Mini-Constitution Amendment', summary: 'Made wide-ranging changes, including adding the words Socialist and Secular to the Preamble and introducing Fundamental Duties.', topics: ['Preamble', 'Fundamental Duties'] },
  { slug: '44th-amendment-1978', number: 44, year: 1978, title: 'Restoring Checks After the Emergency', summary: 'Reversed several changes made by the 42nd Amendment and reinstated safeguards, including making the right to property a legal (not fundamental) right.', topics: ['Emergency', 'property'] },
  { slug: '73rd-amendment-1992', number: 73, year: 1992, title: 'Panchayati Raj', summary: 'Gave constitutional status to rural local self-government institutions (Panchayati Raj).', topics: ['local government'] },
  { slug: '86th-amendment-2002', number: 86, year: 2002, title: 'Right to Education', summary: 'Inserted Article 21A, making free and compulsory education a fundamental right for children in a defined age group.', topics: ['education'], affectedArticles: [{ number: '21A', title: 'Right to Education', explanation: 'The existing overview identifies Article 21A as inserted by this Amendment.' }] },
  { slug: '101st-amendment-2016', number: 101, year: 2016, title: 'Goods and Services Tax (GST)', summary: 'Introduced a unified Goods and Services Tax framework across the country.', topics: ['taxation'] },
]
export const amendmentPath = (slug) => `/amendments/${slug}`
