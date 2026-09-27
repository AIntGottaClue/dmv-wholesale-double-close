export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Scenario { title: string; intro: string; items: string[]; outro: string }
export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  county: string;
  formName: string;
  title: string;
  description: string;
  h1Bottom: string;
  hero: string;
  localNoteTitle: string;
  localNote: string;
  whyHeading: string;
  why: string[];
  steps: Step[];
  faqs: Faq[];
  nearby: string[];
  summaryFees?: boolean;
  summarySteps?: boolean;
  scenario?: Scenario;
  blurb: string;
}

export const brand = "DMV Wholesale Double Close";
export const domain = "YOUR-DOMAIN.com";

export const trustBar: string[] = [
  "Transactional funding up to $1.5M",
  "Fees start at 1%",
  "Funding in as little as 24 hours",
  "Built for DMV wholesalers"
];

export const fees: { label: string; detail: string }[] = [
  { label: "Up to $500K", detail: "1% ($1,000 minimum)" },
  { label: "$500K to $1M", detail: "1.25%" },
  { label: "$1M to $1.5M", detail: "1.50%" },
  { label: "Additional days", detail: "0.2% per day" },
  { label: "Two title or closing companies", detail: "1.75%" },
  { label: "Funding over $1M", detail: "Longer due diligence" },
  { label: "Morby Method", detail: "Fees paid upfront via Zelle or wire" },
  { label: "Additional paperwork or special terms", detail: "1.75% or a per-document fee at our team's discretion" }
];

const FORM = "DMV-Wholesale-Double-Close-Form";

const rawCities: City[] = [
  {
    slug: "washington-dc",
    name: "Washington, DC",
    state: "DC",
    stateName: "District of Columbia",
    county: "District of Columbia",
    formName: FORM,
    title: "Double Close Funding in Washington, DC | Transactional Funding for Wholesalers",
    description: "Transactional double close funding for Washington, DC wholesalers. Rowhouse deals from Capitol Hill to neighborhoods east of the Anacostia River. Fees from 1%.",
    h1Bottom: "in Washington, DC",
    hero: "Washington is the core of the DMV and one of the most active rowhouse renovation markets in the country. Investors chase early 1900s brick rowhouses in Capitol Hill, Petworth, Columbia Heights and Brookland, where renovated homes draw strong prices from move up buyers. Neighborhoods east of the Anacostia River, like Deanwood and Congress Heights, offer lower entry points with room for a wholesale spread. DMV Wholesale Double Close connects you with transactional funding for deals anywhere in the District. You take title with the funder's money, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your DC deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Washington, DC",
    localNote: "Closings in the District typically run through a title company or settlement attorney. DC charges recordation and transfer taxes on real estate transactions, so each side of a double closing carries its own tax line items, and the closing team can walk you through how that nets out on your file. The title company your end buyer already uses can usually run both transactions back to back. Confirm the exact sequence on your deal.",
    whyHeading: "Why DC wholesalers use us",
    why: [
      "District deals move fast, and rowhouse deals move fastest. When a Petworth porch front rowhouse or a Capitol Hill shell hits your pipeline, the end buyer is often already waiting. A double closing lets you capture the spread without tying up your own money or showing your markup to either side.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the title company handling the file. Rowhouse flips and east of the river deals both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings anywhere in the District?", a: "Yes. Deals in every quadrant fit, from Capitol Hill and the H Street corridor to Petworth, Brookland, and neighborhoods east of the Anacostia River. The property type matters less than the numbers: if the purchase and resale both make sense, the deal can usually be funded." },
      { q: "What kinds of DC properties work for a double closing?", a: "Most District wholesale deals involve the city's older brick rowhouses, from shells that need full renovation to dated homes that need cosmetic work. Those properties attract rehab buyers who close with cash or hard money, which makes the resale side straightforward to schedule." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["arlington", "alexandria", "silver-spring"],
  summaryFees: true,
  summarySteps: true,
  scenario: {
    title: "Example: how a DC rowhouse deal can play out",
    intro: "This is an illustrative example, not a real transaction or a promise of results. It shows the moving parts of a typical District rowhouse double closing so you can see where each piece fits.",
    items: [
      "You sign a purchase contract on a 1920s brick rowhouse in Petworth at $415,000 with a 21 day closing window.",
      "Your end buyer, a rehabber who works the rowhouse neighborhoods, commits at $525,000 through the same title company.",
      "The title company schedules both files back to back. Transactional funding covers your $415,000 purchase side, so none of your own cash goes into the deal. DC recordation and transfer taxes appear as their own line items on each side of the file.",
      "Your resale closes right after your purchase. The funding and the 1% fee from the published schedule come out of the resale proceeds, and the remaining spread is your margin."
    ],
    outro: "The full sequence and the paperwork behind it are covered in how double closing works in the DMV, and the fee math is laid out on the transactional funding fees page."
  },
    blurb: "The core of the metro. Early 1900s brick rowhouses from Capitol Hill to Petworth, with lower entry points east of the Anacostia River."
  },
  {
    slug: "arlington",
    name: "Arlington",
    state: "VA",
    stateName: "Virginia",
    county: "Arlington County",
    formName: FORM,
    title: "Double Close Funding in Arlington, VA | Transactional Funding",
    description: "Double close funding for Arlington, VA wholesalers. Postwar colonials and Cape Cods along the Rosslyn-Ballston corridor. Fees from 1%.",
    h1Bottom: "in Arlington, Virginia",
    hero: "Arlington packs some of Northern Virginia's most dependable renovation demand into a small county. The draw is the housing stock: 1940s and 1950s brick colonials and Cape Cods in neighborhoods like Lyon Park, Cherrydale and the streets off Columbia Pike, many of them original and ready for updating or replacement. Buyers who want to live near the Rosslyn-Ballston corridor and the Orange and Silver Line stations compete hard for renovated homes, which keeps teardown and renovation prices among the strongest in the region. DMV Wholesale Double Close connects you with transactional funding for Arlington deals up to $1.5M. You take title, resell to your end buyer the same day, and the spread stays off the assignment contract. Submit your deal and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Arlington",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Because Arlington price points run high, double closings are common here: sellers and buyers both prefer that the wholesale spread stays between the two closing statements. The closing company your end buyer already uses can usually handle both transactions back to back. Confirm the sequence with the closing team on your file.",
    whyHeading: "Why Arlington wholesalers use us",
    why: [
      "Arlington's postwar colonials and Cape Cods bring out serious renovation and teardown buyers, and those buyers close quickly. When your end buyer is paying a premium for a lot near the Orange Line, the last thing you want is a funding delay on the purchase side.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Arlington files often carry higher price points, so include your end buyer's status too." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings across Arlington County?", a: "Yes. Deals anywhere in the county fit, from the Metro corridors through Clarendon and Ballston to the neighborhoods along Columbia Pike. Arlington is entirely urban, so most deals involve the postwar single family stock or older condos and townhouses." },
      { q: "Can you fund higher priced Arlington deals?", a: "Funding goes up to $1.5M, which covers most wholesale transactions in Arlington. Funding over $1M comes with longer due diligence, and the fee steps from 1.25% to 1.50% at the $1M line as shown in the fee schedule." },
      { q: "What is a double closing?", a: "A double closing is two transactions on the same property on the same day. You buy from the seller, then resell to your end buyer, taking title in between. Your wholesale spread stays off any single contract, which sellers and buyers in higher priced markets like Arlington tend to appreciate." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have your deal details and the closing office information. Larger files benefit from an earlier submission because the extra due diligence takes time." },
      { q: "What does funding cost?", a: "Fees follow the published schedule: 1% up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Additional days cost 0.2% per day, and using two closing companies carries a 1.75% fee." },
      { q: "Do you fund earnest money deposits?", a: "Yes, EMD funding is available, and we also fund Morby Method structures with fees paid upfront by Zelle or wire." }
    ],
    nearby: ["alexandria", "mclean", "annandale"],
  summaryFees: true,
  summarySteps: true,
  scenario: {
    title: "A local checklist for Arlington deals",
    intro: "Arlington files tend to hinge on price band and property type. Run through this checklist before you set a closing date; the closing team can confirm anything specific to your file.",
    items: [
      "Check the price band before you assume the fee. Arlington price points often cross the $500K and $1M lines, where the published schedule steps from 1% to 1.25% and 1.50%, and funding over $1M gets a longer due diligence window.",
      "Confirm the property type and its paperwork. A large share of Arlington's housing is condominiums, and association documents and resale certificates take lead time that both closings depend on.",
      "Verify your end buyer's timeline. Arlington's close-in market moves quickly, and a resale that slips past closing day adds the additional day fee from the published schedule for each extra day the funds are out.",
      "Send both prices, the address and the closing office with your submission early, so larger files start the extra due diligence with time to spare."
    ],
    outro: "For the process behind both closings, see how double closing works in the DMV. The published fee schedule applies in Arlington the same as everywhere else we fund."
  },
    blurb: "Postwar brick colonials and Cape Cods near the Rosslyn-Ballston corridor. Teardown and renovation demand at some of the region's strongest price points."
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    state: "VA",
    stateName: "Virginia",
    county: "City of Alexandria",
    formName: FORM,
    title: "Double Close Funding in Alexandria, VA | Transactional Funding",
    description: "Double close funding for Alexandria, VA wholesalers. Deals from Old Town rowhouses to Del Ray and the West End. Fees from 1%.",
    h1Bottom: "in Alexandria, Virginia",
    hero: "Alexandria gives wholesalers two distinct markets in one small city. Old Town and Del Ray hold brick rowhouses and detached homes that draw renovation buyers willing to pay for walkability, with the streets around King Street at the top of the range. The West End and the Eisenhower corridor offer condos and townhouses at lower entry points that work for smaller spreads. DMV Wholesale Double Close connects you with transactional funding for Alexandria deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company or settlement agent. Send your Alexandria deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Alexandria",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Properties inside the Old Town historic district carry exterior review requirements that shape your buyer's renovation plans more than the funding itself, so a clean scope of work matters on those files. The closing team can confirm anything property specific.",
    whyHeading: "Why Alexandria wholesalers use us",
    why: [
      "Demand in Old Town and Del Ray stays deep because buyers compete for walkable neighborhoods close to the city core. When your end buyer is counting on that demand, the purchase side cannot afford a funding delay. A double closing keeps the whole chain on schedule.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. If the property sits in the Old Town historic district, note your buyer's renovation scope when you submit." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in all parts of Alexandria?", a: "Yes. Deals in Old Town, Del Ray, the West End, the Eisenhower corridor and the neighborhoods in between all fit the same form. Price points vary widely across the city, but the process stays the same at every level." },
      { q: "Are Old Town historic district properties harder to fund?", a: "The funding works the same way. What changes is your buyer's renovation plan, since exterior work in the historic district goes through architectural review. As long as the purchase and resale numbers make sense with that scope, the deal can be funded like any other." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["arlington", "springfield", "woodbridge"],
  summaryFees: true,
  summarySteps: true,
  scenario: {
    title: "A local checklist for Alexandria deals",
    intro: "Alexandria files tend to hinge on jurisdiction. Run through this checklist before you set a closing date; the closing team can confirm anything specific to your parcel.",
    items: [
      "Confirm the actual jurisdiction on the parcel. Many addresses with an Alexandria mailing name sit in Fairfax County rather than the City of Alexandria, and the two jurisdictions keep separate land records and their own transfer and recordation tax schedules.",
      "For homes in the Old Town historic district, confirm your end buyer's renovation plans account for the district's design review of exterior changes.",
      "For a condominium or townhouse, order the association documents early so both closings are not waiting on the resale package.",
      "Send both prices, the address and the closing office with your submission so the jurisdiction question is settled before closing day."
    ],
    outro: "For the process behind both closings, see how double closing works in the DMV. The published fee schedule applies in Alexandria the same as everywhere else we fund."
  },
    blurb: "Old Town brick rowhouses and Del Ray charm at the top of the range, condos and townhouses on the West End at lower entry points."
  },
  {
    slug: "centreville",
    name: "Centreville",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Centreville, VA | Transactional Funding",
    description: "Double close funding for Centreville, VA wholesalers. Townhouse and single family deals along the Route 28 and Route 29 corridors. Fees from 1%.",
    h1Bottom: "in Centreville, Virginia",
    hero: "Centreville is western Fairfax County's workhorse market, built out through the 1980s, 1990s and 2000s with townhouses and single family subdivisions along Route 28 and Route 29. Communities like Sully Station and Centre Ridge are full of dated homes whose owners are ready to sell and whose floor plans end buyers already know. Prices here sit well below the close-in Fairfax neighborhoods, which leaves room for a wholesale spread and draws first time and move up buyers to renovated listings. DMV Wholesale Double Close connects you with transactional funding for Centreville deals. You take title, resell to your end buyer the same day, and your markup stays off a single assignment contract. Submit your Centreville deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Centreville",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Centreville files close in Fairfax County, where investor friendly title companies handle back to back transactions regularly. The closing company your end buyer already uses can usually run both sides in sequence. Confirm the exact order with the closing team on your deal.",
    whyHeading: "Why Centreville wholesalers use us",
    why: [
      "Centreville's townhouses and builder grade single family homes attract fix and flip buyers who know exactly what a renovation costs on these floor plans. That makes the resale side easy to place, and a double closing lets you lock in the spread without your own cash in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Townhouse deals and single family deals in Centreville fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Centreville?", a: "Yes. Deals anywhere in Centreville fit, from the townhome communities near Route 28 to the single family subdivisions closer to Route 29. The numbers drive the decision, not the property type." },
      { q: "What kinds of Centreville properties work for a double closing?", a: "Most Centreville wholesale deals involve 1980s through 2000s townhouses and single family homes that need cosmetic updating or heavier renovation. End buyers for these are usually fix and flip investors or retail buyers purchasing a renovated home, and both resale paths work in a double closing." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["fair-oaks", "oakton", "manassas"],
    blurb: "Western Fairfax townhouse and single family subdivisions along Route 28 and 29. Lower price points than close-in Fairfax, steady flip demand."
  },
  {
    slug: "reston",
    name: "Reston",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Reston, VA | Transactional Funding",
    description: "Double close funding for Reston, VA wholesalers. Planned community townhomes and cluster homes from Lake Anne to Reston Town Center. Fees from 1%.",
    h1Bottom: "in Reston, Virginia",
    hero: "Reston was one of the country's first planned communities, and its original 1960s and 1970s cluster townhomes are now one of the DMV's most reliable renovation niches. The early village centers around Lake Anne and the surrounding clusters hold townhomes and detached homes with dated interiors on wooded lots, while demand around Reston Town Center and the Silver Line stations keeps renovated resales moving. DMV Wholesale Double Close connects you with transactional funding for Reston deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company. Send your Reston deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Reston",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Reston files close in Fairfax County. Some Reston properties sit in clusters with association architectural guidelines, which affects your buyer's renovation plans more than the funding. The closing team can confirm anything property specific.",
    whyHeading: "Why Reston wholesalers use us",
    why: [
      "Reston's original cluster townhomes sell to a deep pool of renovation buyers, and the Silver Line keeps demand growing for updated homes near the stations. When the resale side is that predictable, the only variable left is funding the purchase cleanly and on time.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Cluster townhomes, condos and detached homes in Reston all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Reston?", a: "Yes. Deals across Reston fit, from the original clusters near Lake Anne to the neighborhoods around Reston Town Center and the Silver Line stations. Townhomes, condos and detached homes all work when the numbers do." },
      { q: "What kinds of Reston properties work for a double closing?", a: "The most common Reston wholesale deals are the 1960s and 1970s cluster townhomes with dated interiors, plus older detached homes on wooded lots. Renovated versions of both sell steadily, which makes the resale side of the double closing easy to schedule." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["sterling", "mclean", "fair-oaks"],
    blurb: "Original 1960s and 70s cluster townhomes around Lake Anne, with Silver Line and Reston Town Center demand pulling renovated resales."
  },
  {
    slug: "mclean",
    name: "McLean",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in McLean, VA | Transactional Funding",
    description: "Double close funding for McLean, VA wholesalers. Teardown and luxury renovation deals from Chain Bridge Road to Langley. Fees from 1%.",
    h1Bottom: "in McLean, Virginia",
    hero: "McLean is Northern Virginia's highest stakes wholesale market. The inventory is postwar ramblers and colonials on large lots along Chain Bridge Road, in Langley, and in the neighborhoods bordering Tysons, and the end buyers are builders and luxury renovators who replace or rebuild them at the top of the regional price range. Deals here regularly run past $1M, which makes the structure of the closing matter: sellers and buyers both prefer that the wholesale spread stays between two closing statements. DMV Wholesale Double Close connects you with transactional funding for McLean deals up to $1.5M, with longer due diligence over $1M. You take title, resell the same day, and keep your margin private. Submit your McLean deal and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in McLean",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. McLean files close in Fairfax County and often carry seven figure price points, so funding over $1M gets a longer due diligence window rather than a different process. Submit larger files early and confirm the sequence with the closing team on your deal.",
    whyHeading: "Why McLean wholesalers use us",
    why: [
      "McLean's lot value market means your end buyer is often a builder with a hard deadline and a construction loan waiting. A double closing keeps your purchase clean and your spread private, which matters when both sides of the table are sophisticated.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. McLean files often involve lot value pricing, so include your end buyer's status and timeline." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in McLean?", a: "Yes. Deals across McLean fit, from the neighborhoods around downtown McLean to Langley and the streets bordering Tysons. Most files here are teardowns or major renovations at higher price points, and funding goes up to $1.5M." },
      { q: "Can you fund seven figure McLean deals?", a: "Funding over $1M is available up to $1.5M with a longer due diligence window. The fee steps from 1.25% to 1.50% at the $1M line, as shown in the fee schedule, so you can price the funding cost into your offer before you tie up the lot." },
      { q: "What is a double closing?", a: "A double closing is two transactions on the same property on the same day. You buy from the seller, then resell to your end buyer, taking title in between. Your wholesale spread stays off any single contract, which sellers and buyers in markets like McLean tend to appreciate." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have your deal details and the closing office information. Larger files benefit from an earlier submission because the extra due diligence takes time." },
      { q: "What does funding cost?", a: "Fees follow the published schedule: 1% up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Additional days cost 0.2% per day, and using two closing companies carries a 1.75% fee." },
      { q: "Do you fund earnest money deposits?", a: "Yes, EMD funding is available, and we also fund Morby Method structures with fees paid upfront by Zelle or wire." }
    ],
    nearby: ["arlington", "oakton", "reston"],
    blurb: "Postwar homes on large lots from Chain Bridge Road to Langley. Builder and luxury renovation buyers at the top of the regional price range."
  },
  {
    slug: "burke",
    name: "Burke",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Burke, VA | Transactional Funding",
    description: "Double close funding for Burke, VA wholesalers. 1970s and 80s colonials and split levels near Burke Lake Park. Fees from 1%.",
    h1Bottom: "in Burke, Virginia",
    hero: "Burke is classic suburban Fairfax: 1970s and 1980s colonials, split levels and ramblers in planned neighborhoods around Burke Lake Park and the Burke Centre corridor. Many of these homes are still in original or lightly updated condition, and they sit in a school district and commuter pattern that keeps renovated resales in steady demand. That combination of dated inventory and reliable end buyers is exactly what a wholesale double closing is built for. DMV Wholesale Double Close connects you with transactional funding for Burke deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Burke deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Burke",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Burke files close in Fairfax County, and the closing company your end buyer already uses can usually handle both transactions back to back. Confirm the exact sequence with the closing team on your file.",
    whyHeading: "Why Burke wholesalers use us",
    why: [
      "Burke's colonials and split levels are renovation bread and butter: predictable floor plans, known renovation costs, and families waiting to buy the finished product. When your end buyer already has comps on the same model two streets over, a double closing is the cleanest way to capture your spread.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Burke colonials, split levels and ramblers all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Burke?", a: "Yes. Deals anywhere in Burke fit, from the Burke Centre neighborhoods to the streets around Burke Lake Park. Most files involve the area's 1970s and 1980s single family stock, but townhouses work the same way." },
      { q: "What kinds of Burke properties work for a double closing?", a: "The typical Burke wholesale deal is a dated colonial, split level or rambler that needs cosmetic work or a heavier renovation. End buyers are usually fix and flip investors selling to families, which makes the resale side easy to schedule around a single closing date." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["springfield", "annandale", "fair-oaks"],
    blurb: "1970s and 80s colonials and split levels around Burke Lake Park. Predictable floor plans and steady family buyer demand."
  },
  {
    slug: "annandale",
    name: "Annandale",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Annandale, VA | Transactional Funding",
    description: "Double close funding for Annandale, VA wholesalers. Postwar ramblers and split levels inside the Beltway. Fees from 1%.",
    h1Bottom: "in Annandale, Virginia",
    hero: "Annandale is one of the DMV's classic renovation markets: mile after mile of 1950s and 1960s ramblers and split levels along Little River Turnpike, inside the Beltway and minutes from the District. Many of these homes are original owner properties with dated interiors on generous lots, and renovated versions sell to buyers who want the location without the Arlington price tag. DMV Wholesale Double Close connects you with transactional funding for Annandale deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company. Send your Annandale deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Annandale",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Annandale files close in Fairfax County, where title companies handle investor back to back closings routinely. The closing company your end buyer already uses can usually run both sides in sequence. Confirm the order with the closing team on your deal.",
    whyHeading: "Why Annandale wholesalers use us",
    why: [
      "Annandale's ramblers sit on some of the best located lots inside the Beltway, and renovation buyers compete for them. When your end buyer is already lined up on a rambler off Little River Turnpike, a double closing keeps the deal together without your cash or your markup in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Annandale ramblers and split levels both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Annandale?", a: "Yes. Deals across Annandale fit, from the streets off Little River Turnpike to the neighborhoods near the Beltway. The area's postwar housing stock is exactly the kind of property end buyers pursue here." },
      { q: "What kinds of Annandale properties work for a double closing?", a: "Most Annandale wholesale deals involve 1950s and 1960s ramblers and split levels, often from original owners. Renovated versions sell steadily to buyers priced out of Arlington and Alexandria, which makes the resale side of a double closing straightforward." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["springfield", "burke", "west-falls-church"],
    blurb: "1950s and 60s ramblers and split levels along Little River Turnpike, inside the Beltway. Original owner inventory with strong renovation demand."
  },
  {
    slug: "oakton",
    name: "Oakton",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Oakton, VA | Transactional Funding",
    description: "Double close funding for Oakton, VA wholesalers. Larger lots and custom homes between Vienna and Fairfax City. Fees from 1%.",
    h1Bottom: "in Oakton, Virginia",
    hero: "Oakton sits between Vienna and Fairfax City and offers something most of close-in Fairfax cannot: larger lots, mature trees, and a mix of older colonials, ramblers and custom homes that draw renovation and teardown buyers looking for land. Price points run above the Fairfax average, and the buyers competing here are often builders planning substantial projects. DMV Wholesale Double Close connects you with transactional funding for Oakton deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Virginia title company. Submit your Oakton deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Oakton",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Oakton files close in Fairfax County, and larger lot deals sometimes involve well or septic considerations on the outer edges, which affects your buyer's due diligence more than the funding. The closing team can confirm anything property specific.",
    whyHeading: "Why Oakton wholesalers use us",
    why: [
      "Oakton deals often hinge on land value, and the builders buying them move deliberately. A double closing lets you hold your position between a seller who wants a clean cash sale and a builder buyer who wants a normal purchase, without exposing your spread to either one.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Oakton files often involve larger lots, so include your end buyer's plans and timeline." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Oakton?", a: "Yes. Deals across Oakton fit, from the older colonials near the town center to the custom homes on larger lots toward the county edge. Higher price points are normal here, and funding goes up to $1.5M." },
      { q: "What kinds of Oakton properties work for a double closing?", a: "Most Oakton wholesale deals involve older single family homes on larger lots, where the end buyer is a renovator or builder attracted by the land. Those buyers close reliably, which makes scheduling the two sides of a double closing straightforward." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["fair-oaks", "mclean", "reston"],
    blurb: "Larger lots and mature trees between Vienna and Fairfax City. Older homes that draw land focused renovators and builders."
  },
  {
    slug: "fair-oaks",
    name: "Fair Oaks",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Fair Oaks, VA | Transactional Funding",
    description: "Double close funding for Fair Oaks, VA wholesalers. 1980s and 90s subdivisions along the Route 50 corridor. Fees from 1%.",
    h1Bottom: "in Fair Oaks, Virginia",
    hero: "Fair Oaks grew up along the Route 50 corridor in the 1980s and 1990s, and its subdivisions of colonials and townhouses near Fair Oaks Mall are now prime renovation inventory. These are homes with good bones and dated finishes in a location that commuters to both the Dulles corridor and the Beltway want, so renovated resales draw steady retail demand. DMV Wholesale Double Close connects you with transactional funding for Fair Oaks deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company. Send your Fair Oaks deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Fair Oaks",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Fair Oaks files close in Fairfax County, and the closing company your end buyer already uses can usually handle both transactions back to back. Confirm the exact sequence with the closing team on your deal.",
    whyHeading: "Why Fair Oaks wholesalers use us",
    why: [
      "Fair Oaks subdivisions give fix and flip buyers exactly what they want: repeat floor plans, known renovation budgets, and retail buyers who like the location. With the resale that predictable, a double closing is the simplest way to secure your spread without using your own funds.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Fair Oaks colonials and townhouses fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Fair Oaks?", a: "Yes. Deals anywhere in Fair Oaks fit, from the subdivisions around Fair Oaks Mall to the neighborhoods stretching toward Fairfax City. Both townhouses and single family homes work when the numbers do." },
      { q: "What kinds of Fair Oaks properties work for a double closing?", a: "Most Fair Oaks wholesale deals are 1980s and 1990s colonials and townhouses that need cosmetic or moderate renovation. End buyers renovate them for a commuter market that values the Route 50 corridor location, so the resale side is easy to place." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["oakton", "centreville", "burke"],
    blurb: "1980s and 90s colonials and townhouses along Route 50 near Fair Oaks Mall. Dated finishes, commuter friendly location, steady retail demand."
  },
  {
    slug: "west-falls-church",
    name: "West Falls Church",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in West Falls Church, VA | Transactional Funding",
    description: "Double close funding for West Falls Church, VA wholesalers. Postwar ramblers and teardowns near the Metro. Fees from 1%.",
    h1Bottom: "in West Falls Church, Virginia",
    hero: "West Falls Church has become one of Fairfax County's hottest teardown corridors. The neighborhoods along Route 7 near the West Falls Church Metro station are filled with 1940s through 1960s ramblers and Cape Cods on quarter acre lots, and builders replace them with new construction at prices that keep climbing. The Falls Church name and the Metro access drive the demand, and the lot is usually where the value sits. DMV Wholesale Double Close connects you with transactional funding for West Falls Church deals up to $1.5M. You take title, resell to your builder or renovator buyer the same day, and the spread stays between the two closing statements. Submit your deal and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in West Falls Church",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. West Falls Church files close in Fairfax County. Because so many deals here are lot value purchases by builders, expect your end buyer to close with cash or a credit line, which makes scheduling both sides of a double closing easier. Confirm the sequence with the closing team.",
    whyHeading: "Why West Falls Church wholesalers use us",
    why: [
      "When the value is in the lot, the deal is really about timing: your seller wants a clean, fast cash sale and your builder buyer wants the dirt. A double closing gives both sides exactly that while your spread stays off a single contract.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. West Falls Church files are often lot value deals, so include your end buyer's status and timeline." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in West Falls Church?", a: "Yes. Deals across the West Falls Church area fit, from the streets around the Metro station to the neighborhoods along Route 7 toward Falls Church City. Most files involve postwar ramblers and Cape Cods bought for renovation or replacement." },
      { q: "Can you fund teardown deals where the value is in the lot?", a: "Yes. Lot value deals are common in this corridor, and they fund like any other double closing: the purchase and resale numbers need to make sense, and funding goes up to $1.5M with longer due diligence over $1M." },
      { q: "What is a double closing?", a: "A double closing is two transactions on the same property on the same day. You buy from the seller, then resell to your end buyer, taking title in between. Your wholesale spread stays off any single contract, which sellers and buyers in competitive corridors like this one tend to appreciate." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have your deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does funding cost?", a: "Fees follow the published schedule: 1% up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Additional days cost 0.2% per day, and using two closing companies carries a 1.75% fee." },
      { q: "Do you fund earnest money deposits?", a: "Yes, EMD funding is available, and we also fund Morby Method structures with fees paid upfront by Zelle or wire." }
    ],
    nearby: ["mclean", "annandale", "arlington"],
    blurb: "1940s through 60s ramblers on quarter acre lots near the West Falls Church Metro. One of the county's hottest teardown corridors."
  },
  {
    slug: "springfield",
    name: "Springfield",
    state: "VA",
    stateName: "Virginia",
    county: "Fairfax County",
    formName: FORM,
    title: "Double Close Funding in Springfield, VA | Transactional Funding",
    description: "Double close funding for Springfield, VA wholesalers. Postwar ramblers near the Mixing Bowl and Franconia-Springfield Metro. Fees from 1%.",
    h1Bottom: "in Springfield, Virginia",
    hero: "Springfield offers some of the best value inside the Fairfax market: 1950s through 1970s ramblers, split levels and colonials in neighborhoods around Springfield Town Center and the Franconia-Springfield Metro. The Mixing Bowl interchange puts I-95, I-395 and the Beltway at residents' doorstep, and renovated homes here sell to commuters who want the access without close-in prices. DMV Wholesale Double Close connects you with transactional funding for Springfield deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Springfield deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Springfield",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Springfield files close in Fairfax County, and the closing company your end buyer already uses can usually handle both transactions back to back. Confirm the exact sequence with the closing team on your file.",
    whyHeading: "Why Springfield wholesalers use us",
    why: [
      "Springfield's postwar ramblers attract a deep bench of fix and flip buyers because the entry prices leave room for renovation and profit. When your end buyer can name the resale comp before you finish the walkthrough, a double closing is the fastest way to bank your spread.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Springfield ramblers, split levels and townhouses all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Springfield?", a: "Yes. Deals across Springfield fit, from the neighborhoods around Springfield Town Center to the streets near the Franconia-Springfield Metro station. Both single family homes and townhouses work when the numbers do." },
      { q: "What kinds of Springfield properties work for a double closing?", a: "Most Springfield wholesale deals are 1950s through 1970s ramblers and split levels with dated interiors. Renovated versions sell steadily to commuters, which makes the resale side of a double closing easy to schedule." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["annandale", "burke", "alexandria"],
    blurb: "1950s through 70s ramblers and split levels near the Mixing Bowl and the Franconia-Springfield Metro. Commuter demand at approachable prices."
  },
  {
    slug: "leesburg",
    name: "Leesburg",
    state: "VA",
    stateName: "Virginia",
    county: "Loudoun County",
    formName: FORM,
    title: "Double Close Funding in Leesburg, VA | Transactional Funding",
    description: "Double close funding for Leesburg, VA wholesalers. Historic district homes and newer subdivisions in the Loudoun county seat. Fees from 1%.",
    h1Bottom: "in Leesburg, Virginia",
    hero: "Leesburg pairs a genuine historic downtown, centered on King Street and its brick sidewalks, with rings of newer subdivisions that have made it one of Loudoun County's biggest housing markets. That gives wholesalers two kinds of deals: older in-town homes that attract renovation buyers who want walkability, and dated 1980s through 2000s colonials and townhouses that attract fix and flip buyers with solid comps. DMV Wholesale Double Close connects you with transactional funding for Leesburg deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company. Send your Leesburg deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Leesburg",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Leesburg files close in Loudoun County. Homes inside the historic district carry design guidelines for exterior changes, which shapes your buyer's renovation plans more than the funding itself. The closing team can confirm anything property specific.",
    whyHeading: "Why Leesburg wholesalers use us",
    why: [
      "Leesburg's mix of historic in-town homes and subdivision colonials keeps both renovation buyers and flip buyers active at the same time. When your end buyer is already lined up, a double closing lets you capture the spread without your own cash or your markup sitting in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Historic district homes and subdivision properties in Leesburg fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Leesburg?", a: "Yes. Deals anywhere in Leesburg fit, from the historic downtown streets to the subdivisions along the Route 7 and Route 15 corridors. In-town older homes and newer colonials both work when the numbers make sense." },
      { q: "Are historic district homes harder to fund?", a: "The funding works the same way. What changes is your buyer's renovation plan, since exterior changes in the historic district follow the town's design guidelines. As long as the purchase and resale numbers account for that scope, the deal can be funded like any other." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["ashburn", "sterling", "south-riding"],
    blurb: "The Loudoun county seat. Historic King Street homes in town, 1980s through 2000s colonials and townhouses in the surrounding subdivisions."
  },
  {
    slug: "ashburn",
    name: "Ashburn",
    state: "VA",
    stateName: "Virginia",
    county: "Loudoun County",
    formName: FORM,
    title: "Double Close Funding in Ashburn, VA | Transactional Funding",
    description: "Double close funding for Ashburn, VA wholesalers. Planned community townhomes and single family homes near the Silver Line. Fees from 1%.",
    h1Bottom: "in Ashburn, Virginia",
    hero: "Ashburn is Loudoun's growth engine, built out through the 1990s, 2000s and 2010s with planned communities like Ashburn Farm, Ashburn Village and Broadlands. The earliest of those neighborhoods now hold thirty year old colonials and townhouses with original kitchens and baths, right as the Silver Line's Ashburn station has made the area more desirable than ever. That timing is the wholesale opportunity: dated inventory in a market where renovated resales sell fast. DMV Wholesale Double Close connects you with transactional funding for Ashburn deals up to $1.5M. You take title, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Ashburn deal and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Ashburn",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Ashburn files close in Loudoun County. Most Ashburn homes sit in homeowners associations, so expect resale document packages in the timeline, which affects scheduling more than funding. The closing team can confirm the sequence on your file.",
    whyHeading: "Why Ashburn wholesalers use us",
    why: [
      "Ashburn's oldest planned communities are hitting their renovation cycle all at once, and fix and flip buyers know these floor plans by heart. When the resale is that predictable, the only thing between you and your spread is a clean, fast purchase closing.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Ashburn townhouses and single family homes fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Ashburn?", a: "Yes. Deals across Ashburn fit, from the original Ashburn Farm and Ashburn Village neighborhoods to Broadlands and the areas around the Silver Line station. Townhouses, condos and single family homes all work when the numbers do." },
      { q: "What kinds of Ashburn properties work for a double closing?", a: "Most Ashburn wholesale deals are 1990s and early 2000s colonials and townhouses in the area's first planned communities, where dated interiors meet strong resale demand. End buyers renovate them for a commuter market anchored by the Silver Line." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["sterling", "leesburg", "south-riding"],
    blurb: "Loudoun's growth engine. First generation planned communities hitting their renovation cycle just as the Silver Line arrived."
  },
  {
    slug: "south-riding",
    name: "South Riding",
    state: "VA",
    stateName: "Virginia",
    county: "Loudoun County",
    formName: FORM,
    title: "Double Close Funding in South Riding, VA | Transactional Funding",
    description: "Double close funding for South Riding, VA wholesalers. Master planned townhomes and single family homes on Route 50. Fees from 1%.",
    h1Bottom: "in South Riding, Virginia",
    hero: "South Riding is one of Loudoun County's signature master planned communities, built from the mid 1990s onward along Route 50. Its townhouses and single family homes are now at the age where kitchens, baths and systems need full updates, while the community's pools, schools and location keep drawing move up buyers to renovated listings. That makes South Riding a natural wholesale market: repeatable floor plans, clear comps, and reliable end demand. DMV Wholesale Double Close connects you with transactional funding for South Riding deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Send your South Riding deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in South Riding",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. South Riding files close in Loudoun County, and nearly every property sits in the community association, so resale documents are part of the timeline. The closing company your end buyer already uses can usually handle both transactions back to back. Confirm the sequence with the closing team.",
    whyHeading: "Why South Riding wholesalers use us",
    why: [
      "South Riding's first generation of homes is hitting its renovation window, and flip buyers already know what these models sell for updated. When comps are that clear, a double closing is the fastest way to turn a contract into a banked spread.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. South Riding townhouses and single family homes fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in South Riding?", a: "Yes. Deals anywhere in South Riding fit, from the townhome sections near Route 50 to the single family neighborhoods deeper in the community. The numbers drive the decision, not the property type." },
      { q: "What kinds of South Riding properties work for a double closing?", a: "Most South Riding wholesale deals are 1990s and 2000s townhouses and single family homes with dated interiors. End buyers renovate them for the move up market the community attracts, which keeps the resale side of a double closing easy to schedule." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["ashburn", "centreville", "linton-hall"],
    blurb: "Master planned Loudoun community on Route 50. First generation homes hitting their renovation window with clear comps."
  },
  {
    slug: "sterling",
    name: "Sterling",
    state: "VA",
    stateName: "Virginia",
    county: "Loudoun County",
    formName: FORM,
    title: "Double Close Funding in Sterling, VA | Transactional Funding",
    description: "Double close funding for Sterling, VA wholesalers. 1960s Sterling Park ramblers and townhouses near Dulles. Fees from 1%.",
    h1Bottom: "in Sterling, Virginia",
    hero: "Sterling is Loudoun County's original suburb, and its age is the opportunity. Sterling Park's 1960s and 1970s ramblers and split levels, plus the townhome communities in Sugarland Run and along Route 7, offer some of the lowest entry prices in the county for homes sitting minutes from Dulles and the Route 28 tech corridor. Renovated resales here draw buyers priced out of Reston and Ashburn, which keeps flip demand steady. DMV Wholesale Double Close connects you with transactional funding for Sterling deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Sterling deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Sterling",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Sterling files close in Loudoun County, and the closing company your end buyer already uses can usually handle both transactions back to back. Confirm the exact sequence with the closing team on your file.",
    whyHeading: "Why Sterling wholesalers use us",
    why: [
      "Sterling's older ramblers and townhouses give wholesalers something rare in Loudoun: entry prices with real room for a spread. Fix and flip buyers work this market hard because renovated homes here are the affordable option for the whole Dulles corridor.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Sterling Park ramblers and Sugarland Run townhouses fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Sterling?", a: "Yes. Deals across Sterling fit, from the original Sterling Park neighborhoods to Sugarland Run, Countryside and the corridors along Route 7 and Route 28. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Sterling properties work for a double closing?", a: "Most Sterling wholesale deals are 1960s and 1970s ramblers and split levels, plus 1980s townhouses, all with dated interiors. End buyers renovate them for buyers priced out of Reston and Ashburn, so the resale side moves reliably." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["ashburn", "reston", "leesburg"],
    blurb: "Loudoun's original suburb. 1960s Sterling Park ramblers and Route 7 townhouses at the county's most approachable entry prices."
  },
  {
    slug: "dale-city",
    name: "Dale City",
    state: "VA",
    stateName: "Virginia",
    county: "Prince William County",
    formName: FORM,
    title: "Double Close Funding in Dale City, VA | Transactional Funding",
    description: "Double close funding for Dale City, VA wholesalers. 1960s through 80s homes along Dale Boulevard near I-95. Fees from 1%.",
    h1Bottom: "in Dale City, Virginia",
    hero: "Dale City is Prince William County's original planned community, built from the 1960s through the 1980s along Dale Boulevard just east of I-95. Its ramblers, split levels and colonials now make up one of the DMV's most dependable value renovation markets: entry prices that leave room for a spread, and a deep pool of first time and move up buyers who commute toward Quantico, the Beltway and the District. DMV Wholesale Double Close connects you with transactional funding for Dale City deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company. Send your Dale City deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Dale City",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Dale City files close in Prince William County, where investor volume keeps local title companies fluent in back to back transactions. The closing company your end buyer already uses can usually run both sides in sequence. Confirm the order with the closing team on your deal.",
    whyHeading: "Why Dale City wholesalers use us",
    why: [
      "Dale City runs on volume. The housing stock is uniform, the renovation math is well understood, and flip buyers work the neighborhood constantly. When you can place the resale before you close the purchase, a double closing turns your contract into a banked spread in a single day.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Dale City ramblers, split levels and townhouses all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Dale City?", a: "Yes. Deals anywhere in Dale City fit, from the original sections near I-95 to the newer streets west toward Hoadly Road. The area's uniform housing stock makes comps easy, and the numbers drive the funding decision." },
      { q: "What kinds of Dale City properties work for a double closing?", a: "Most Dale City wholesale deals are 1960s through 1980s ramblers, split levels and colonials with dated interiors. End buyers renovate them for one of the region's most reliable first time buyer pools, so the resale side schedules easily." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["woodbridge", "lake-ridge", "linton-hall"],
    blurb: "Prince William's original planned community along Dale Boulevard. Uniform postwar stock, easy comps, and one of the region's deepest value buyer pools."
  },
  {
    slug: "lake-ridge",
    name: "Lake Ridge",
    state: "VA",
    stateName: "Virginia",
    county: "Prince William County",
    formName: FORM,
    title: "Double Close Funding in Lake Ridge, VA | Transactional Funding",
    description: "Double close funding for Lake Ridge, VA wholesalers. 1970s planned community homes on the Occoquan Reservoir. Fees from 1%.",
    h1Bottom: "in Lake Ridge, Virginia",
    hero: "Lake Ridge was planned in the early 1970s along the Occoquan Reservoir, and its townhouses and single family homes on wooded lots have aged into a steady renovation market. The community's pools, parks and water access keep family demand strong for updated homes, while the original housing stock offers dated interiors at entry prices that still leave room for a spread. DMV Wholesale Double Close connects you with transactional funding for Lake Ridge deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Virginia title company. Submit your Lake Ridge deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Lake Ridge",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Lake Ridge files close in Prince William County. Most of the community belongs to the Lake Ridge Parks and Recreation Association, so association resale documents are part of the timeline, which affects scheduling more than funding. The closing team can confirm the sequence on your file.",
    whyHeading: "Why Lake Ridge wholesalers use us",
    why: [
      "Lake Ridge buyers stay loyal to the community, which means renovated homes resell inside a known price band. Flip buyers rely on that, and a double closing lets you use it too: line up the resale, fund the purchase, and keep your spread out of sight.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Lake Ridge townhouses and single family homes fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Lake Ridge?", a: "Yes. Deals across Lake Ridge fit, from the townhome clusters to the single family sections on the wooded lots near the reservoir. Both property types work when the purchase and resale numbers make sense." },
      { q: "What kinds of Lake Ridge properties work for a double closing?", a: "Most Lake Ridge wholesale deals are 1970s and 1980s townhouses and single family homes with dated interiors. Renovated versions resell to families who want the community's amenities, which keeps the resale side of a double closing predictable." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["woodbridge", "dale-city", "linton-hall"],
    blurb: "Early 1970s planned community on the Occoquan Reservoir. Wooded lots, strong amenity package, and loyal family buyer demand."
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    state: "VA",
    stateName: "Virginia",
    county: "Prince William County",
    formName: FORM,
    title: "Double Close Funding in Woodbridge, VA | Transactional Funding",
    description: "Double close funding for Woodbridge, VA wholesalers. Route 1 corridor deals from Potomac Mills to Occoquan. Fees from 1%.",
    h1Bottom: "in Woodbridge, Virginia",
    hero: "Woodbridge is Prince William County's biggest and most varied market, stretching from the Potomac Mills retail corridor down Route 1 to the Occoquan River. The housing runs from 1960s and 1970s single family neighborhoods to dense townhome communities, all at entry prices among the lowest inside the Capital Beltway commuter shed. I-95 and the VRE keep demand deep from commuters, and renovated homes resell quickly at this price point. DMV Wholesale Double Close connects you with transactional funding for Woodbridge deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Woodbridge deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Woodbridge",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Woodbridge files close in Prince William County, where heavy investor volume keeps local title companies fluent in back to back transactions. The closing company your end buyer already uses can usually run both sides in sequence. Confirm the order with the closing team on your deal.",
    whyHeading: "Why Woodbridge wholesalers use us",
    why: [
      "Woodbridge offers volume and velocity: lots of dated inventory, lots of flip buyers, and a commuter market that absorbs renovated homes fast. A double closing keeps your deals moving at that pace without your own cash sitting in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Woodbridge single family homes and townhouses fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Woodbridge?", a: "Yes. Deals across Woodbridge fit, from the neighborhoods around Potomac Mills to the Route 1 corridor and the streets near Occoquan. Single family homes, townhouses and condos all work when the numbers do." },
      { q: "What kinds of Woodbridge properties work for a double closing?", a: "Most Woodbridge wholesale deals are older single family homes and townhouses with dated interiors at some of the metro's most approachable price points. End buyers renovate them for a deep commuter buyer pool, so the resale side moves quickly." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["dale-city", "lake-ridge", "manassas"],
    blurb: "The county's biggest market, from Potomac Mills down Route 1 to Occoquan. Varied older stock at the commuter shed's lowest entry prices."
  },
  {
    slug: "linton-hall",
    name: "Linton Hall",
    state: "VA",
    stateName: "Virginia",
    county: "Prince William County",
    formName: FORM,
    title: "Double Close Funding in Linton Hall, VA | Transactional Funding",
    description: "Double close funding for Linton Hall, VA wholesalers. Newer subdivisions near Gainesville and Virginia Gateway. Fees from 1%.",
    h1Bottom: "in Linton Hall, Virginia",
    hero: "Linton Hall is the newer side of Prince William County: large subdivisions built from the 1990s through the 2010s around Gainesville, anchored by the Virginia Gateway shops and the Route 29 and I-66 junction. The wholesale inventory here is newer than most of the county, which means cosmetic renovations rather than gut jobs and retail buyers who pay move up prices for updated homes. DMV Wholesale Double Close connects you with transactional funding for Linton Hall deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Virginia title company. Send your Linton Hall deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Linton Hall",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Linton Hall files close in Prince William County, and most properties sit in homeowners associations, so resale document packages are part of the timeline. The closing company your end buyer already uses can usually handle both transactions back to back. Confirm the sequence with the closing team.",
    whyHeading: "Why Linton Hall wholesalers use us",
    why: [
      "Newer housing stock changes the math: lighter renovations, faster turns, and end buyers who want a retail ready product. A double closing fits that pace, letting you capture the spread on a clean cosmetic flip without tying up your own funds.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Linton Hall colonials and townhouses fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Linton Hall?", a: "Yes. Deals across the Linton Hall and Gainesville area fit, from the subdivisions along Linton Hall Road to the neighborhoods near Virginia Gateway. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Linton Hall properties work for a double closing?", a: "Most Linton Hall wholesale deals are 1990s through 2010s colonials and townhouses needing cosmetic updates rather than heavy renovation. End buyers renovate them for the move up market drawn to the Route 29 and I-66 corridor." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["manassas", "centreville", "dale-city"],
    blurb: "Newer subdivisions around Gainesville and the Virginia Gateway shops. Cosmetic flip inventory at move up price points."
  },
  {
    slug: "manassas",
    name: "Manassas",
    state: "VA",
    stateName: "Virginia",
    county: "City of Manassas",
    formName: FORM,
    title: "Double Close Funding in Manassas, VA | Transactional Funding",
    description: "Double close funding for Manassas, VA wholesalers. Old Town homes and townhouses in the independent city. Fees from 1%.",
    h1Bottom: "in Manassas, Virginia",
    hero: "Manassas is an independent city with its own character: a walkable Old Town along Center Street with early 1900s homes, postwar neighborhoods in between, and newer townhome communities on the edges near the Manassas National Battlefield. That range gives wholesalers everything from historic renovation projects to straightforward cosmetic flips, at entry prices well below Fairfax. The VRE station keeps commuter demand alive, and renovated resales move steadily. DMV Wholesale Double Close connects you with transactional funding for Manassas deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Manassas deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Manassas",
    localNote: "Virginia closings typically run through a title company or settlement agent, and recordation taxes apply at each closing. Manassas is an independent city, so files record with the City of Manassas rather than Prince William County, and the closing team handles that routinely. Homes in the Old Town historic district carry design guidelines for exterior changes. The closing team can confirm anything property specific.",
    whyHeading: "Why Manassas wholesalers use us",
    why: [
      "Manassas gives wholesalers range: Old Town character homes for renovation buyers, postwar ramblers for flip buyers, and townhouses for the first time buyer market. Whatever shape your deal takes, a double closing keeps the two sides clean and your spread private.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Old Town homes, ramblers and townhouses in Manassas all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in the City of Manassas?", a: "Yes. Deals anywhere in the independent city fit, from Old Town to the newer edges near the battlefield. Note that the City of Manassas is separate from Prince William County for recording, and the closing team handles that as a matter of routine." },
      { q: "What kinds of Manassas properties work for a double closing?", a: "The range is wide: early 1900s homes around Old Town, postwar ramblers and colonials, and newer townhouses. End buyers cover the same range, from renovation specialists to first time buyers, so resales are easy to place." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["linton-hall", "centreville", "woodbridge"],
    blurb: "Independent city with a walkable Old Town, postwar neighborhoods, and newer townhomes near the battlefield. Entry prices well below Fairfax."
  },
  {
    slug: "germantown",
    name: "Germantown",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Germantown, MD | Transactional Funding",
    description: "Double close funding for Germantown, MD wholesalers. Townhome villages along the I-270 corridor. Fees from 1%.",
    h1Bottom: "in Germantown, Maryland",
    hero: "Germantown is upper Montgomery County's volume market, a string of 1970s and 1980s townhome villages along I-270 that now offers some of the county's most approachable entry prices. The townhouses and smaller single family homes here attract first time buyers priced out of downcounty, and fix and flip buyers work the villages constantly because the renovation math is simple and the resale demand is steady. DMV Wholesale Double Close connects you with transactional funding for Germantown deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your Germantown deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Germantown",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Germantown files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Germantown wholesalers use us",
    why: [
      "Germantown is a numbers market: uniform townhomes, clear comps, and buyers waiting for updated product at the county's friendliest prices. When the deal is that clean, a double closing is the fastest way to collect your spread without your own cash in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Germantown townhomes and single family homes fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Germantown?", a: "Yes. Deals across Germantown fit, from the original townhome villages to the newer sections near the BlackRock arts center and the MARC station. Townhouses, condos and single family homes all work when the numbers do." },
      { q: "What kinds of Germantown properties work for a double closing?", a: "Most Germantown wholesale deals are 1970s and 1980s townhouses with dated interiors, plus smaller single family homes. End buyers renovate them for first time and move up buyers, so the resale side of a double closing is easy to schedule." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["gaithersburg", "montgomery-village", "clarksburg"],
    blurb: "Upper Montgomery's volume market. 1970s and 80s townhome villages along I-270 at the county's friendliest entry prices."
  },
  {
    slug: "silver-spring",
    name: "Silver Spring",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Silver Spring, MD | Transactional Funding",
    description: "Double close funding for Silver Spring, MD wholesalers. Postwar colonials and Cape Cods just over the DC line. Fees from 1%.",
    h1Bottom: "in Silver Spring, Maryland",
    hero: "Silver Spring is where the District's renovation energy crosses the Maryland line. Neighborhoods like Woodside and East Silver Spring hold 1920s through 1950s colonials, Tudors and Cape Cods on leafy lots, minutes from the Red Line and a revitalized downtown around Ellsworth Drive. Renovated homes here pull buyers who want close-in character without DC prices, and the older stock gives wholesalers steady inventory. DMV Wholesale Double Close connects you with transactional funding for Silver Spring deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Silver Spring deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Silver Spring",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Silver Spring files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Silver Spring wholesalers use us",
    why: [
      "Silver Spring's older colonials and Cape Cods attract renovation buyers who specialize in character homes, and resales benefit from every buyer priced out of the District. When your end buyer is waiting, a double closing lets you capture the spread without exposing it to either side.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Silver Spring colonials, Cape Cods and ramblers all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Silver Spring?", a: "Yes. Deals across greater Silver Spring fit, from Woodside and East Silver Spring near downtown to Four Corners and the streets along Georgia Avenue and Colesville Road. Older character homes and postwar ramblers both work." },
      { q: "What kinds of Silver Spring properties work for a double closing?", a: "Most Silver Spring wholesale deals are 1920s through 1950s colonials, Tudors and Cape Cods with dated interiors. End buyers renovate them for buyers who want close-in character, which keeps the resale side of a double closing moving." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["wheaton", "aspen-hill", "bethesda"],
  summaryFees: true,
  summarySteps: true,
  scenario: {
    title: "A local checklist for Silver Spring deals",
    intro: "Silver Spring files tend to hinge on county paperwork and block-level pricing rather than the headline numbers. Run through this checklist before you set a closing date; the closing team can confirm anything specific to your parcel.",
    items: [
      "Confirm how the contract describes jurisdiction. Silver Spring is not an incorporated city, so land records and transfer and recordation taxes run through Montgomery County, and older paperwork may use neighborhood names like Forest Glen or Colesville instead of Silver Spring.",
      "For a condominium or townhouse sale, order the association documents early. Resale packages can take days to arrive, and both closings wait on them.",
      "Verify your end buyer has walked the specific block. The housing stock shifts quickly from the streets near downtown Silver Spring to the postwar colonials and ramblers further out, and buyers price to the block.",
      "Send both prices, the address and the closing office with your submission so the review covers the county tax lines up front."
    ],
    outro: "For the process behind both closings, see how double closing works in the DMV. The published fee schedule applies in Silver Spring the same as everywhere else we fund."
  },
    blurb: "1920s through 50s colonials, Tudors and Cape Cods just over the DC line, with a revitalized downtown and Red Line access."
  },
  {
    slug: "gaithersburg",
    name: "Gaithersburg",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Gaithersburg, MD | Transactional Funding",
    description: "Double close funding for Gaithersburg, MD wholesalers. I-270 corridor deals from the Kentlands to Rio. Fees from 1%.",
    h1Bottom: "in Gaithersburg, Maryland",
    hero: "Gaithersburg is the I-270 corridor's most balanced market: older townhomes and split levels near the original town center, planned communities like the Kentlands, and the shopping districts around Rio Washingtonian drawing steady foot traffic. The mix gives wholesalers dated inventory at midrange prices and a buyer pool fed by the corridor's biotech and federal employers. DMV Wholesale Double Close connects you with transactional funding for Gaithersburg deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your Gaithersburg deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Gaithersburg",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Gaithersburg files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Gaithersburg wholesalers use us",
    why: [
      "Gaithersburg's older townhomes and split levels sit in a corridor where jobs keep the resale market liquid. Flip buyers know it, and a double closing lets you use that liquidity to capture your spread in a single day without your own funds in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Gaithersburg townhomes, split levels and colonials fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Gaithersburg?", a: "Yes. Deals anywhere in Gaithersburg fit, from the older neighborhoods near the town center to the Kentlands, the Washingtonian area and the Montgomery Village border. Townhouses and single family homes both work when the numbers do." },
      { q: "What kinds of Gaithersburg properties work for a double closing?", a: "Most Gaithersburg wholesale deals are 1960s through 1990s townhouses, split levels and colonials with dated interiors. End buyers renovate them for the corridor's steady professional buyer pool, so resales schedule easily." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["germantown", "montgomery-village", "rockville"],
    blurb: "The I-270 corridor's balanced market: older townhomes and split levels, the Kentlands, and employer driven resale demand."
  },
  {
    slug: "bethesda",
    name: "Bethesda",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Bethesda, MD | Transactional Funding",
    description: "Double close funding for Bethesda, MD wholesalers. Postwar colonials and teardowns near NIH and downtown. Fees from 1%.",
    h1Bottom: "in Bethesda, Maryland",
    hero: "Bethesda is Maryland's premium renovation and teardown market. The neighborhoods around downtown Bethesda and the NIH campus are full of 1940s and 1950s colonials, ramblers and Cape Cods on good lots, and end buyers, from luxury renovators to builders, pay some of the metro's strongest prices for the finished product. Deals here often run high enough that structure matters: sellers and buyers both prefer the wholesale spread to stay between two closing statements. DMV Wholesale Double Close connects you with transactional funding for Bethesda deals up to $1.5M, with longer due diligence over $1M. You take title, resell the same day, and keep your margin private. Submit your Bethesda deal and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Bethesda",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and at Bethesda price points those line items are significant, so the contract should say clearly who pays which share. Files record in Montgomery County. The closing team can confirm the numbers on your deal.",
    whyHeading: "Why Bethesda wholesalers use us",
    why: [
      "Bethesda's lot values mean your counterparty is often a builder or a seasoned renovator, and your seller is often an estate or a long time owner. A double closing keeps the transaction professional on both sides while your spread stays out of the paperwork.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Bethesda files often carry higher price points, so include your end buyer's status and timeline." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Bethesda?", a: "Yes. Deals across Bethesda fit, from the neighborhoods around downtown and the NIH campus to the streets along River Road and Old Georgetown Road. Most files involve postwar homes bought for renovation or replacement at higher price points." },
      { q: "Can you fund seven figure Bethesda deals?", a: "Funding over $1M is available up to $1.5M with a longer due diligence window. The fee steps from 1.25% to 1.50% at the $1M line, as shown in the fee schedule, so you can price the funding cost into your offer before you tie up the property." },
      { q: "What is a double closing?", a: "A double closing is two transactions on the same property on the same day. You buy from the seller, then resell to your end buyer, taking title in between. Your wholesale spread stays off any single contract, which sellers and buyers in markets like Bethesda tend to appreciate." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have your deal details and the closing office information. Larger files benefit from an earlier submission because the extra due diligence takes time." },
      { q: "What does funding cost?", a: "Fees follow the published schedule: 1% up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Additional days cost 0.2% per day, and using two closing companies carries a 1.75% fee." },
      { q: "Do you fund earnest money deposits?", a: "Yes, EMD funding is available, and we also fund Morby Method structures with fees paid upfront by Zelle or wire." }
    ],
    nearby: ["north-bethesda", "potomac", "silver-spring"],
    blurb: "Maryland's premium renovation and teardown market. Postwar homes on good lots near downtown and NIH, with buyers at the metro's strongest prices."
  },
  {
    slug: "rockville",
    name: "Rockville",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Rockville, MD | Transactional Funding",
    description: "Double close funding for Rockville, MD wholesalers. Twinbrook ramblers to King Farm townhomes in the county seat. Fees from 1%.",
    h1Bottom: "in Rockville, Maryland",
    hero: "Rockville is Montgomery County's seat and one of its most dependable wholesale markets. Twinbrook's 1950s and 1960s ramblers and Cape Cods offer classic renovation inventory near the Red Line, while King Farm and the Rockville Town Square area show exactly what updated product sells for. The city's employer base and Metro access keep end demand deep at every price point. DMV Wholesale Double Close connects you with transactional funding for Rockville deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your Rockville deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Rockville",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Rockville files record in Montgomery County, right where the county's closing offices cluster. The closing team can confirm the sequence on your deal.",
    whyHeading: "Why Rockville wholesalers use us",
    why: [
      "Rockville's ramblers and Cape Cods are renovation staples: predictable layouts, deep comps, and buyers who pay for proximity to Metro and the town square. A double closing lets you work that pipeline deal after deal without your own capital in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Twinbrook ramblers, King Farm townhomes and Rockville colonials all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Rockville?", a: "Yes. Deals anywhere in Rockville fit, from Twinbrook and the streets around Rockville Town Square to King Farm and the city's eastern neighborhoods. Single family homes, townhouses and condos all work when the numbers do." },
      { q: "What kinds of Rockville properties work for a double closing?", a: "Most Rockville wholesale deals are 1950s and 1960s ramblers and Cape Cods in Twinbrook, plus older colonials and townhouses elsewhere in the city. End buyers renovate them for a deep Metro oriented buyer pool." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["north-bethesda", "gaithersburg", "aspen-hill"],
    blurb: "The county seat. Twinbrook's 1950s ramblers near the Red Line, with King Farm and Town Square setting the renovated comps."
  },
  {
    slug: "aspen-hill",
    name: "Aspen Hill",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Aspen Hill, MD | Transactional Funding",
    description: "Double close funding for Aspen Hill, MD wholesalers. 1950s through 70s ramblers and split levels off Georgia Avenue. Fees from 1%.",
    h1Bottom: "in Aspen Hill, Maryland",
    hero: "Aspen Hill is a quiet workhorse between Rockville and Olney, filled with ramblers, split levels and split foyers built from the mid 1950s through the early 1970s along the Georgia Avenue corridor. Many are original owner homes with dated interiors on generous lots, and renovated versions sell to families who want Montgomery County schools and a yard at prices below Rockville and Bethesda. DMV Wholesale Double Close connects you with transactional funding for Aspen Hill deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Submit your Aspen Hill deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Aspen Hill",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Aspen Hill files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Aspen Hill wholesalers use us",
    why: [
      "Aspen Hill's ramblers and split levels are exactly what local flip buyers look for: simple layouts, big lots, and family buyers waiting for the renovated version. A double closing turns that into a same day spread with no cash of your own in the deal.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Aspen Hill ramblers, split levels and split foyers all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Aspen Hill?", a: "Yes. Deals across Aspen Hill fit, from the neighborhoods along Georgia Avenue to the streets near Layhill and the Rock Creek border. The area's postwar single family stock is exactly what end buyers pursue here." },
      { q: "What kinds of Aspen Hill properties work for a double closing?", a: "Most Aspen Hill wholesale deals are 1950s through 1970s ramblers, split levels and split foyers, often from original owners. Renovated versions sell steadily to families, which makes the resale side of a double closing straightforward." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["wheaton", "rockville", "olney"],
    blurb: "Mid 1950s through early 70s ramblers and split levels between Rockville and Olney. Original owner inventory on generous lots."
  },
  {
    slug: "wheaton",
    name: "Wheaton",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Wheaton, MD | Transactional Funding",
    description: "Double close funding for Wheaton, MD wholesalers. 1940s through 60s Cape Cods and ramblers at the end of the Red Line. Fees from 1%.",
    h1Bottom: "in Wheaton, Maryland",
    hero: "Wheaton offers some of close-in Montgomery County's best value: 1940s through 1960s Cape Cods, ramblers and split levels in neighborhoods around the Wheaton mall and the end of the Red Line. The county has been reinvesting in downtown Wheaton, and renovated homes here sell to buyers who want Metro access and a yard at prices well below Bethesda and Silver Spring's close-in streets. DMV Wholesale Double Close connects you with transactional funding for Wheaton deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Submit your Wheaton deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Wheaton",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Wheaton files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Wheaton wholesalers use us",
    why: [
      "Wheaton's modest postwar homes sit on valuable close-in land, which gives flip buyers two exits: renovate for the first time buyer market or sell to builders betting on the area's trajectory. A double closing lets you capture the spread either way, without your own cash in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Wheaton Cape Cods, ramblers and split levels all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Wheaton?", a: "Yes. Deals across Wheaton fit, from the streets around the mall and the Metro to the neighborhoods toward Kensington and Glenmont. The area's postwar housing stock is exactly what end buyers pursue here." },
      { q: "What kinds of Wheaton properties work for a double closing?", a: "Most Wheaton wholesale deals are 1940s through 1960s Cape Cods, ramblers and split levels with dated interiors. Renovated versions sell to buyers priced out of Bethesda and close-in Silver Spring, so the resale side moves reliably." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["silver-spring", "aspen-hill", "chillum"],
    blurb: "1940s through 60s Cape Cods and ramblers at the end of the Red Line, with county reinvestment in downtown Wheaton lifting the comps."
  },
  {
    slug: "north-bethesda",
    name: "North Bethesda",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in North Bethesda, MD | Transactional Funding",
    description: "Double close funding for North Bethesda, MD wholesalers. White Flint corridor deals from Pike and Rose to Grosvenor. Fees from 1%.",
    h1Bottom: "in North Bethesda, Maryland",
    hero: "North Bethesda is being rebuilt in real time. The White Flint corridor along Rockville Pike has added Pike and Rose and a wave of redevelopment around the Metro, while the surrounding neighborhoods still hold postwar ramblers, split levels and townhouses that investors buy for renovation or replacement. That contrast is the opportunity: dated single family stock sitting next to some of the county's most valuable new development. DMV Wholesale Double Close connects you with transactional funding for North Bethesda deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Submit your North Bethesda deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in North Bethesda",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. North Bethesda files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why North Bethesda wholesalers use us",
    why: [
      "When a corridor is redeveloping this fast, land under older homes appreciates on its own, and builders as well as renovators compete for it. A double closing lets you sit between a seller with a dated home and a buyer betting on the corridor, keeping your spread private from both.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. North Bethesda files can involve land value pricing, so include your end buyer's status and timeline." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in North Bethesda?", a: "Yes. Deals across North Bethesda fit, from the neighborhoods around Pike and Rose and the White Flint corridor to the streets near Grosvenor-Strathmore. Single family homes, townhouses and condos all work when the numbers do." },
      { q: "What kinds of North Bethesda properties work for a double closing?", a: "Most North Bethesda wholesale deals are postwar ramblers, split levels and townhouses near the redeveloping corridor, where end buyers range from renovators to builders focused on the land. Higher price points are common, and funding goes up to $1.5M." },
      { q: "What is a double closing?", a: "A double closing is two transactions on the same property on the same day. You buy from the seller, then resell to your end buyer, taking title in between. Your wholesale spread stays off any single contract, which sellers and buyers in higher priced markets tend to appreciate." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have your deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does funding cost?", a: "Fees follow the published schedule: 1% up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Additional days cost 0.2% per day, and using two closing companies carries a 1.75% fee." },
      { q: "Do you fund earnest money deposits?", a: "Yes, EMD funding is available, and we also fund Morby Method structures with fees paid upfront by Zelle or wire." }
    ],
    nearby: ["bethesda", "rockville", "potomac"],
    blurb: "The White Flint corridor around Pike and Rose, being rebuilt in real time. Postwar homes next to the county's most valuable new development."
  },
  {
    slug: "potomac",
    name: "Potomac",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Potomac, MD | Transactional Funding",
    description: "Double close funding for Potomac, MD wholesalers. Large lot and custom home deals near Potomac Village. Fees from 1%.",
    h1Bottom: "in Potomac, Maryland",
    hero: "Potomac is Montgomery County's estate market: custom and semi custom homes on one and two acre lots along the roads between Potomac Village and the C&O Canal, with price points at the top of the Maryland market. The wholesale inventory is the older 1960s through 1980s colonials and ramblers on those lots, which builders and luxury renovators buy for renovation or replacement. DMV Wholesale Double Close connects you with transactional funding for Potomac deals up to $1.5M, with longer due diligence over $1M. You take title, resell to your end buyer the same day, and the spread stays between the two closing statements. Submit your Potomac deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Potomac",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side, and at Potomac price points they are significant line items, so the contract should allocate them clearly. Files record in Montgomery County. The closing team can confirm the numbers on your deal.",
    whyHeading: "Why Potomac wholesalers use us",
    why: [
      "Potomac deals are land deals, and the buyers are builders with programs to feed. A double closing keeps your purchase clean and your spread private when both sides of the table close high value transactions for a living.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the address, contract price, resale price, and closing office. Potomac files often involve lot value pricing, so include your end buyer's plans and timeline." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Deals over $1M get extra due diligence time, so submit those as early as you can." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Potomac?", a: "Yes. Deals across Potomac fit, from the neighborhoods around Potomac Village to the roads toward Great Falls and the C&O Canal. Most files involve older homes on large lots bought for renovation or replacement at the top of the market." },
      { q: "Can you fund seven figure Potomac deals?", a: "Funding over $1M is available up to $1.5M with a longer due diligence window. The fee steps from 1.25% to 1.50% at the $1M line, as shown in the fee schedule, so you can price the funding cost into your offer before you tie up the property." },
      { q: "What is a double closing?", a: "A double closing is two transactions on the same property on the same day. You buy from the seller, then resell to your end buyer, taking title in between. Your wholesale spread stays off any single contract, which sellers and buyers in markets like Potomac tend to appreciate." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have your deal details and the closing office information. Larger files benefit from an earlier submission because the extra due diligence takes time." },
      { q: "What does funding cost?", a: "Fees follow the published schedule: 1% up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Additional days cost 0.2% per day, and using two closing companies carries a 1.75% fee." },
      { q: "Do you fund earnest money deposits?", a: "Yes, EMD funding is available, and we also fund Morby Method structures with fees paid upfront by Zelle or wire." }
    ],
    nearby: ["bethesda", "rockville", "north-bethesda"],
    blurb: "Montgomery's estate market. Older colonials and ramblers on one and two acre lots between Potomac Village and the C&O Canal."
  },
  {
    slug: "olney",
    name: "Olney",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Olney, MD | Transactional Funding",
    description: "Double close funding for Olney, MD wholesalers. 1970s through 90s subdivisions along upper Georgia Avenue. Fees from 1%.",
    h1Bottom: "in Olney, Maryland",
    hero: "Olney is upcounty Montgomery's family market, a cluster of 1970s through 1990s subdivisions along upper Georgia Avenue anchored by the Olney Theatre and the town center. The colonials and split levels here are hitting their renovation cycle, and updated homes resell to households who want Montgomery County schools with more house and yard than downcounty budgets allow. DMV Wholesale Double Close connects you with transactional funding for Olney deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Submit your Olney deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Olney",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Olney files record in Montgomery County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Olney wholesalers use us",
    why: [
      "Olney's subdivisions offer the predictable flip profile: known models, active family buyer demand, and comps that hold. When the resale is that readable, a double closing is the cleanest way to convert your contract into a banked spread.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Olney colonials, split levels and townhouses all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Olney?", a: "Yes. Deals across Olney fit, from the neighborhoods around the town center and the Olney Theatre to the streets along Georgia Avenue and Route 108. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Olney properties work for a double closing?", a: "Most Olney wholesale deals are 1970s through 1990s colonials and split levels with dated interiors. End buyers renovate them for the family market the area attracts, which keeps the resale side of a double closing easy to schedule." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["aspen-hill", "clarksburg", "gaithersburg"],
    blurb: "Upcounty family market around the Olney Theatre and town center. 1970s through 90s colonials hitting their renovation cycle."
  },
  {
    slug: "montgomery-village",
    name: "Montgomery Village",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Montgomery Village, MD | Transactional Funding",
    description: "Double close funding for Montgomery Village, MD wholesalers. 1960s and 70s planned community homes near Lake Whetstone. Fees from 1%.",
    h1Bottom: "in Montgomery Village, Maryland",
    hero: "Montgomery Village is one of the county's original planned communities, built from the late 1960s onward around Lake Whetstone. Its townhouses and single family homes offer midcounty's most approachable entry prices, and the community's lakes, pools and paths keep first time and move up buyers coming. For wholesalers that means steady dated inventory, simple renovation math, and a reliable resale exit. DMV Wholesale Double Close connects you with transactional funding for Montgomery Village deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Montgomery Village",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Montgomery Village files record in Montgomery County, and most homes carry association resale documents in the timeline. The closing team can confirm the sequence on your deal.",
    whyHeading: "Why Montgomery Village wholesalers use us",
    why: [
      "The Village runs on repeatability: the same models, the same renovation scope, and buyers who already know the community. Flip buyers work it constantly, and a double closing lets you match their pace without your own money in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Village townhouses and single family homes fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Montgomery Village?", a: "Yes. Deals across the Village fit, from the townhome clusters to the single family sections around Lake Whetstone and North Creek. The community's uniform housing stock keeps comps easy, and the numbers drive the funding decision." },
      { q: "What kinds of Montgomery Village properties work for a double closing?", a: "Most Village wholesale deals are 1960s through 1980s townhouses and single family homes with dated interiors. End buyers renovate them for first time and move up buyers, so the resale side of a double closing schedules easily." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["gaithersburg", "germantown", "rockville"],
    blurb: "One of the county's original planned communities around Lake Whetstone. Uniform 1960s through 80s stock at midcounty's friendliest prices."
  },
  {
    slug: "clarksburg",
    name: "Clarksburg",
    state: "MD",
    stateName: "Maryland",
    county: "Montgomery County",
    formName: FORM,
    title: "Double Close Funding in Clarksburg, MD | Transactional Funding",
    description: "Double close funding for Clarksburg, MD wholesalers. Newer subdivisions along upper I-270 near the Premium Outlets. Fees from 1%.",
    h1Bottom: "in Clarksburg, Maryland",
    hero: "Clarksburg has been one of Montgomery County's fastest growing communities for two decades, with wave after wave of new subdivisions along upper I-270 around the Clarksburg Premium Outlets. The wholesale angle here is different from the county's older suburbs: the inventory is 1990s through 2010s colonials and townhouses that need cosmetic updates rather than gut renovations, and the buyers are move up households who want newer construction without new construction prices. DMV Wholesale Double Close connects you with transactional funding for Clarksburg deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Submit your Clarksburg deal and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Clarksburg",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Clarksburg files record in Montgomery County, and most homes carry association resale documents in the timeline. The closing team can confirm the sequence on your deal.",
    whyHeading: "Why Clarksburg wholesalers use us",
    why: [
      "Clarksburg's newer stock means lighter renovations and faster turns for your end buyers, which makes resales easy to place before you close the purchase. A double closing matches that pace and keeps your spread out of the paperwork.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Clarksburg colonials and townhouses fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Clarksburg?", a: "Yes. Deals across Clarksburg fit, from the town center development to the subdivisions along Route 355 and near the outlets. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Clarksburg properties work for a double closing?", a: "Most Clarksburg wholesale deals are 1990s through 2010s colonials and townhouses needing cosmetic updates. End buyers renovate them for move up households who want the newer corridor without new construction prices." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["germantown", "olney", "gaithersburg"],
    blurb: "One of the county's fastest growing communities on upper I-270. Newer colonials and townhouses suited to quick cosmetic flips."
  },
  {
    slug: "bowie",
    name: "Bowie",
    state: "MD",
    stateName: "Maryland",
    county: "Prince George's County",
    formName: FORM,
    title: "Double Close Funding in Bowie, MD | Transactional Funding",
    description: "Double close funding for Bowie, MD wholesalers. Levitt built ranchers and colonials near Bowie Town Center. Fees from 1%.",
    h1Bottom: "in Bowie, Maryland",
    hero: "Bowie grew from the Levitt planned community of the 1960s, and those original ranchers and colonials on the lettered streets are now one of Prince George's County's most reliable renovation markets. The homes are simple, the lots are level, and renovated versions resell steadily to buyers commuting toward DC, Annapolis and the Route 50 corridor. Newer subdivisions and Bowie Town Center round out a deep, family oriented market. DMV Wholesale Double Close connects you with transactional funding for Bowie deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Bowie deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Bowie",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and Prince George's County has its own county rate, so the contract should allocate those costs clearly. The closing team can confirm the numbers on your deal.",
    whyHeading: "Why Bowie wholesalers use us",
    why: [
      "Bowie's Levitt era ranchers are some of the simplest flips in the metro: predictable layouts, known costs, and family buyers waiting for the renovated version. A double closing lets you run that play repeatedly without tying up your own capital.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Bowie ranchers, colonials and townhouses all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Bowie?", a: "Yes. Deals across Bowie fit, from the original Levitt sections on the lettered streets to the newer subdivisions near Bowie Town Center and Route 50. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Bowie properties work for a double closing?", a: "Most Bowie wholesale deals are 1960s and 1970s ranchers and colonials with dated interiors, plus newer homes needing cosmetic work. End buyers renovate them for the commuter market along Route 50, so resales move reliably." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["laurel", "college-park", "clinton"],
    blurb: "Levitt era ranchers and colonials on the lettered streets, plus newer subdivisions near Bowie Town Center. Simple flips, steady commuter demand."
  },
  {
    slug: "clinton",
    name: "Clinton",
    state: "MD",
    stateName: "Maryland",
    county: "Prince George's County",
    formName: FORM,
    title: "Double Close Funding in Clinton, MD | Transactional Funding",
    description: "Double close funding for Clinton, MD wholesalers. Larger lot homes along the Branch Avenue corridor near Joint Base Andrews. Fees from 1%.",
    h1Bottom: "in Clinton, Maryland",
    hero: "Clinton offers something rare this close to the District: space. The neighborhoods along the Branch Avenue corridor mix 1970s through 1990s ramblers, split levels and colonials on larger lots, many with room for additions or outbuildings. Joint Base Andrews sits next door, and the area's relative affordability draws first time and move up buyers who want a yard without leaving the commuter shed. DMV Wholesale Double Close connects you with transactional funding for Clinton deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your Clinton deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Clinton",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and Prince George's County has its own county rate, so the contract should allocate those costs clearly. Clinton files record in Prince George's County. The closing team can confirm the numbers on your deal.",
    whyHeading: "Why Clinton wholesalers use us",
    why: [
      "Clinton's larger lots and lower entry prices give flip buyers room to add real value, and the resale market absorbs updated homes from buyers priced out of closer suburbs. A double closing lets you capture that spread in a day with no cash of your own in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Clinton ramblers, split levels and colonials all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Clinton?", a: "Yes. Deals across Clinton fit, from the neighborhoods along Branch Avenue and Woodyard Road to the streets near Joint Base Andrews. The area's larger lot single family stock is exactly what end buyers pursue here." },
      { q: "What kinds of Clinton properties work for a double closing?", a: "Most Clinton wholesale deals are 1970s through 1990s ramblers, split levels and colonials on larger lots with dated interiors. End buyers renovate them for first time and move up buyers, so the resale side of a double closing schedules easily." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["waldorf", "bowie", "washington-dc"],
    blurb: "Larger lot living along Branch Avenue near Joint Base Andrews. 1970s through 90s homes with room to add value."
  },
  {
    slug: "chillum",
    name: "Chillum",
    state: "MD",
    stateName: "Maryland",
    county: "Prince George's County",
    formName: FORM,
    title: "Double Close Funding in Chillum, MD | Transactional Funding",
    description: "Double close funding for Chillum, MD wholesalers. Postwar single family homes just over the DC line near Fort Totten. Fees from 1%.",
    h1Bottom: "in Chillum, Maryland",
    hero: "Chillum sits right on the District line, and that location is its whole story. The 1940s through 1960s ramblers, Cape Cods and brick colonials along Riggs Road and East-West Highway are minutes from the Fort Totten Metro, at prices a fraction of what similar homes cost a mile south in DC. Renovated homes here sell to buyers who want the shortest possible commute at the lowest possible price, and that demand keeps Chillum's older stock moving. DMV Wholesale Double Close connects you with transactional funding for Chillum deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your Chillum deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Chillum",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and Prince George's County has its own county rate, so the contract should allocate those costs clearly. Chillum files record in Prince George's County. The closing team can confirm the numbers on your deal.",
    whyHeading: "Why Chillum wholesalers use us",
    why: [
      "Chillum is a location arbitrage market: buyers compare every renovated listing against DC prices a mile away. Flip buyers work that spread constantly, and a double closing lets you work it too, with no capital of your own sitting in the deal.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Chillum ramblers, Cape Cods and colonials all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Chillum?", a: "Yes. Deals across Chillum fit, from the streets along Riggs Road and East-West Highway to the neighborhoods near the Fort Totten Metro. The area's postwar single family stock is exactly what end buyers pursue here." },
      { q: "What kinds of Chillum properties work for a double closing?", a: "Most Chillum wholesale deals are 1940s through 1960s ramblers, Cape Cods and brick colonials with dated interiors. Renovated versions sell to buyers comparing against DC prices, which keeps the resale side of a double closing moving." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["silver-spring", "college-park", "washington-dc"],
    blurb: "Right on the DC line near Fort Totten. 1940s through 60s ramblers and brick colonials at a fraction of District prices."
  },
  {
    slug: "college-park",
    name: "College Park",
    state: "MD",
    stateName: "Maryland",
    county: "Prince George's County",
    formName: FORM,
    title: "Double Close Funding in College Park, MD | Transactional Funding",
    description: "Double close funding for College Park, MD wholesalers. Old Town homes and Route 1 corridor deals near UMD. Fees from 1%.",
    h1Bottom: "in College Park, Maryland",
    hero: "College Park runs on the University of Maryland, and that makes it a different kind of wholesale market. The early 1900s through postwar homes in Old Town and along the Route 1 corridor draw two kinds of end buyers: renovators selling to households tied to the university, and investors holding rentals for the student market. Redevelopment along Route 1 and the coming light rail connection keep the area's trajectory pointed up. DMV Wholesale Double Close connects you with transactional funding for College Park deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Submit your College Park deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in College Park",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and Prince George's County has its own county rate, so the contract should allocate those costs clearly. College Park files record in Prince George's County. The closing team can confirm the numbers on your deal.",
    whyHeading: "Why College Park wholesalers use us",
    why: [
      "University anchored demand does not cycle the way most suburbs do, and your end buyers here include rental investors who close with cash and renovate on a schedule. A double closing lets you feed that demand without tying up your own funds between contracts.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Old Town homes and Route 1 corridor properties both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in College Park?", a: "Yes. Deals across College Park fit, from Old Town and the streets near campus to the Route 1 corridor toward Berwyn. Both renovation resales and investor rental purchases work as the second side of a double closing." },
      { q: "What kinds of College Park properties work for a double closing?", a: "Most College Park wholesale deals are early 1900s through postwar single family homes with dated interiors. End buyers range from renovators serving university tied households to landlords holding for the student rental market." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["chillum", "laurel", "bowie"],
    blurb: "University anchored demand. Old Town and Route 1 corridor homes drawing both renovators and student rental investors."
  },
  {
    slug: "laurel",
    name: "Laurel",
    state: "MD",
    stateName: "Maryland",
    county: "Prince George's County",
    formName: FORM,
    title: "Double Close Funding in Laurel, MD | Transactional Funding",
    description: "Double close funding for Laurel, MD wholesalers. Historic Main Street to Route 1 corridor townhomes. Fees from 1%.",
    h1Bottom: "in Laurel, Maryland",
    hero: "Laurel sits halfway between DC and Baltimore on the Route 1 corridor, and that in between position defines its market. The historic Main Street district holds older homes with character, the MARC station pulls commuters from both cities, and newer townhome communities along the corridor give the area a broad range of price points. Dated single family homes here attract both renovators and rental investors feeding the corridor's workforce. DMV Wholesale Double Close connects you with transactional funding for Laurel deals. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your Laurel deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Laurel",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and Prince George's County has its own county rate, so the contract should allocate those costs clearly. Homes in the historic district carry design guidelines for exterior changes. The closing team can confirm anything property specific.",
    whyHeading: "Why Laurel wholesalers use us",
    why: [
      "Laurel's two city commuter pull gives your end buyers a wider resale audience than most suburbs, and the corridor's older homes keep deal flow steady. A double closing lets you convert that flow into same day spreads without your own capital in escrow.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Main Street area homes and corridor townhouses both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Laurel?", a: "Yes. Deals across Laurel fit, from the historic Main Street district to the townhome communities along Route 1 and the neighborhoods near the MARC station. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Laurel properties work for a double closing?", a: "Most Laurel wholesale deals are older single family homes near the historic district and dated townhouses along the corridor. End buyers include renovators selling to commuters and investors holding rentals for the corridor workforce." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["college-park", "bowie", "olney"],
    blurb: "Halfway between DC and Baltimore on Route 1. Historic Main Street character, MARC commuters, and newer corridor townhomes."
  },
  {
    slug: "waldorf",
    name: "Waldorf",
    state: "MD",
    stateName: "Maryland",
    county: "Charles County",
    formName: FORM,
    title: "Double Close Funding in Waldorf, MD | Transactional Funding",
    description: "Double close funding for Waldorf, MD wholesalers. St. Charles planned community deals along the Crain Highway corridor. Fees from 1%.",
    h1Bottom: "in Waldorf, Maryland",
    hero: "Waldorf is Charles County's center of gravity, built around the St. Charles planned community and the retail corridor along Crain Highway. The 1970s through 2000s ramblers, colonials and townhouses here offer some of the Washington metro's lowest entry prices inside the commuter shed, and renovated homes resell to buyers commuting toward DC, Joint Base Andrews and the Navy facilities down Route 301. DMV Wholesale Double Close connects you with transactional funding for Waldorf deals. You take title with the funder's money, resell to your end buyer the same day, and your spread stays off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Submit your Waldorf deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Waldorf",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Waldorf files record in Charles County. The closing team can confirm the sequence and the numbers on your deal.",
    whyHeading: "Why Waldorf wholesalers use us",
    why: [
      "Waldorf's combination of low entry prices and steady commuter demand makes it a volume wholesale market. Flip buyers work the St. Charles villages constantly, and a double closing lets you keep pace with them without your own cash in the middle.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Waldorf ramblers, colonials and townhouses all fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Waldorf?", a: "Yes. Deals across Waldorf fit, from the St. Charles villages to the neighborhoods along Crain Highway and toward the mall. Single family homes and townhouses both work when the numbers do." },
      { q: "What kinds of Waldorf properties work for a double closing?", a: "Most Waldorf wholesale deals are 1970s through 2000s ramblers, colonials and townhouses with dated interiors. End buyers renovate them for commuters headed toward DC, Andrews and the Route 301 corridor, so resales move steadily." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property. You buy the home from the seller, then immediately resell it to your end buyer. Because you take title in between, your purchase price and your resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["clinton", "bowie", "washington-dc"],
    blurb: "Charles County's center of gravity around St. Charles and Crain Highway. Some of the metro's lowest entry prices inside the commuter shed."
  },
  {
    slug: "frederick",
    name: "Frederick",
    state: "MD",
    stateName: "Maryland",
    county: "Frederick County",
    formName: FORM,
    title: "Double Close Funding in Frederick, MD | Transactional Funding",
    description: "Double close funding for Frederick, MD wholesalers. Historic downtown rowhomes to newer subdivisions off I-270. Fees from 1%.",
    h1Bottom: "in Frederick, Maryland",
    hero: "Frederick has become the I-270 corridor's second city, and its market runs on two engines: a genuine historic downtown along Carroll Creek with brick rowhomes and older housing stock, and rings of newer subdivisions near Ballenger Creek and the I-70 interchange that keep absorbing commuters priced out of Montgomery County. Fort Detrick and the biotech corridor add local employment on top. DMV Wholesale Double Close connects you with transactional funding for Frederick deals up to $1.5M. You take title with the funder's money, resell to your end buyer the same day, and keep your markup off a single assignment contract. Both closings typically run through a Maryland title company or closing attorney. Send your Frederick deal through the form and funding can be ready in as little as 24 hours.",
    localNoteTitle: "How double closings work in Frederick",
    localNote: "Maryland closings can be handled by a title company or a closing attorney, and most investor files close with the title company the end buyer already uses. State and county transfer and recordation taxes apply on each side of a double closing, and the contract usually allocates who pays which share. Homes in Frederick's historic district carry design guidelines for exterior changes. The closing team can confirm anything property specific on your file.",
    whyHeading: "Why Frederick wholesalers use us",
    why: [
      "Frederick's dual market means steady deal flow in two different price bands: historic district renovations downtown and cosmetic flips in the newer subdivisions. A double closing works the same way on both, keeping your spread private and your capital free for the next contract.",
      "We connect you with transactional funding for the purchase side of your deal so you can take title and resell the same day. Your seller sees a clean cash purchase, your buyer sees a normal sale, and your wholesale spread stays between the two closing statements instead of on an assignment contract.",
      "The fee schedule is published on this page and stays flat across every city and county in the DMV. You can underwrite the funding cost into your offer before you tie up the property, and there are no surprise charges at the closing table."
    ],
    steps: [
      { title: "Submit your deal", text: "Send the property address, your contract price, the resale price, and the closing office handling the file. Downtown rowhomes and subdivision colonials both fit the same form." },
      { title: "We review the numbers", text: "The purchase, the resale, and the paperwork get reviewed with the closing office. Questions get answered before closing day, not at the table." },
      { title: "Funding closes your purchase", text: "On closing day the funds for your purchase side are wired. Your resale closes right after, the funds and fee come out of the proceeds, and the spread is yours." }
    ],
    faqs: [
      { q: "Do you fund double closings in Frederick?", a: "Yes. Deals across Frederick fit, from the historic downtown streets around Carroll Creek to the subdivisions near Ballenger Creek and the I-70 and I-270 junctions. Rowhomes, colonials and townhouses all work when the numbers do." },
      { q: "Are historic district homes harder to fund?", a: "The funding works the same way. What changes is your buyer's renovation plan, since exterior changes in the historic district follow the city's design guidelines. As long as the purchase and resale numbers account for that scope, the deal can be funded like any other." },
      { q: "What is a double closing?", a: "A double closing is two back to back transactions on the same property on the same day. You buy the home from the seller, take title, and immediately resell it to your end buyer. Because you take title in between, your purchase price and resale price stay on separate closing statements instead of one assignment contract." },
      { q: "How fast can funding be ready?", a: "Funding can be ready in as little as 24 hours once we have the deal details and the closing office information. Files with complete paperwork move fastest, so send everything you have when you submit the form." },
      { q: "What does double close funding cost?", a: "Fees follow the schedule on this page: 1% on deals up to $500K with a $1,000 minimum, 1.25% from $500K to $1M, and 1.50% from $1M to $1.5M. Extra days, a second closing company, or special paperwork carry the additional fees listed in the schedule." },
      { q: "Can you fund EMD or a Morby Method deal?", a: "Yes. Earnest money deposits and Morby Method structures are part of what we fund. Morby Method fees are paid upfront by Zelle or wire, as listed in the fee schedule above." }
    ],
    nearby: ["clarksburg", "germantown", "gaithersburg"],
    blurb: "The I-270 corridor's second city. Historic Carroll Creek rowhomes downtown, newer subdivisions absorbing Montgomery County spillover."
  }
];

export const cities: City[] = rawCities;
