import type { Metadata } from "next";
import StandardPage from '../templates/StandardPage';

export const metadata: Metadata = {
  title: "Fee Structure",
  description:
    "View the current Mnara School fee structure for Early Years, Primary, and Secondary, including tuition, uniforms, lunch, transport, and payment terms.",
  alternates: {
    canonical: "https://mnara.sc.ke/fee-structure/",
  },
};

const tuitionData = {
  earlyYears: [
    { level: "Playgroup", term1: "55,000", term2: "55,000", term3: "55,000", annually: "165,000" },
    { level: "KG1", term1: "75,000", term2: "75,000", term3: "75,000", annually: "225,000" },
    { level: "KG2", term1: "75,000", term2: "75,000", term3: "75,000", annually: "225,000" },
    { level: "Reception", term1: "75,000", term2: "75,000", term3: "75,000", annually: "225,000" },
  ],
  primary: [
    { level: "Year 1", term1: "88,000", term2: "88,000", term3: "88,000", annually: "246,000" },
    { level: "Year 2", term1: "88,000", term2: "88,000", term3: "88,000", annually: "246,000" },
    { level: "Year 3", term1: "110,000", term2: "110,000", term3: "110,000", annually: "330,000" },
    { level: "Year 4", term1: "110,000", term2: "110,000", term3: "110,000", annually: "330,000" },
    { level: "Year 5", term1: "120,000", term2: "120,000", term3: "120,000", annually: "360,000" },
    { level: "Year 6", term1: "120,000", term2: "120,000", term3: "120,000", annually: "360,000" },
  ],
  lowerSecondary: [
    { level: "Year 7", term1: "140,000", term2: "140,000", term3: "140,000", annually: "420,000" },
    { level: "Year 8", term1: "140,000", term2: "140,000", term3: "140,000", annually: "420,000" },
    { level: "Year 9", term1: "160,000", term2: "160,000", term3: "160,000", annually: "480,000" },
  ],
  upperSecondary: [
    { level: "Year 10", term1: "180,000", term2: "180,000", term3: "180,000", annually: "540,000" },
    { level: "Year 11", term1: "290,000", term2: "290,000", term3: "Payable in 2 instalments", annually: "580,000" },
  ],
};

const tuitionExclusive = [
  "Extra-curricular activities",
  "Stationery in the student/parent handbook",
  "Workbooks and learners\u2019 books",
  "Academic trips outside Nairobi",
  "School lunch program",
  "School transport service",
  "School uniform",
];

const primaryExclusive = [
  ...tuitionExclusive.slice(0, 6),
  "Checkpoint enrollment fees",
  "School uniform",
];

const secondaryExclusive = [
  "Extracurricular activities",
  "Stationery in the student/parent handbook",
  "Academic trips",
  "Lunch fees",
  "Transport",
  "Checkpoint registration fees",
  "School uniform",
];

const tuitionIncludes = "One diary per academic year, ICT, Art and Design, and Deenyaat subjects.";

const uniformData = [
  {
    stage: "Early Years Foundation School",
    girls: "Ksh 10,250",
    boys: "Ksh 8,850",
    girlsItems: [
      "2 Dresses \u2014 Ksh 1,800",
      "2 Trousers \u2014 Ksh 2,000",
      "1 Sweater \u2014 Ksh 800",
      "2 Hijabs \u2014 Ksh 1,100",
      "1 Tracksuit \u2014 Ksh 1,500",
      "1 P.E. T-shirt \u2014 Ksh 650",
      "1 Fleece Jacket \u2014 Ksh 2,000",
      "2 Pairs of Socks \u2014 Ksh 400",
    ],
    boysItems: [
      "2 Shirts \u2014 Ksh 1,400",
      "2 Trousers \u2014 Ksh 2,000",
      "1 Sweater \u2014 Ksh 800",
      "1 Elastic Tie \u2014 Ksh 100",
      "1 Tracksuit \u2014 Ksh 1,500",
      "1 P.E. T-shirt \u2014 Ksh 650",
      "1 Fleece Jacket \u2014 Ksh 2,000",
      "2 Pairs of Socks \u2014 Ksh 400",
    ],
  },
  {
    stage: "Key Stages 1 & 2",
    girls: "Ksh 15,750",
    boys: "Ksh 11,150",
    girlsItems: [
      "2 Pairs of Socks \u2014 Ksh 400",
      "2 Trousers \u2014 Ksh 2,800",
      "2 Skirts \u2014 Ksh 2,400",
      "2 Blouses \u2014 Ksh 1,800",
      "1 Full Tie \u2014 Ksh 200",
      "1 Sweater \u2014 Ksh 1,000",
      "1 Fleece \u2014 Ksh 2,500",
      "1 T-shirt \u2014 Ksh 650",
      "1 Tracksuit \u2014 Ksh 1,800",
      "2 Hijabs \u2014 Ksh 1,300",
      "1 Wrapper Skirt \u2014 Ksh 900",
    ],
    boysItems: [
      "1 Sweater \u2014 Ksh 1,000",
      "2 Shirts \u2014 Ksh 1,800",
      "2 Trousers \u2014 Ksh 2,800",
      "2 Socks \u2014 Ksh 400",
      "1 Tracksuit \u2014 Ksh 1,800",
      "1 Full Tie \u2014 Ksh 200",
      "1 T-shirt \u2014 Ksh 650",
      "1 Fleece Jacket \u2014 Ksh 2,500",
    ],
  },
  {
    stage: "Key Stage 3 (Year 7\u20139)",
    girls: "Ksh 16,700",
    boys: "Ksh 12,000",
    girlsItems: [
      "2 Pairs of Socks \u2014 Ksh 400",
      "2 Trousers \u2014 Ksh 2,800",
      "2 Skirts \u2014 Ksh 2,400",
      "2 Blouses \u2014 Ksh 2,000",
      "1 Full Tie \u2014 Ksh 200",
      "1 Sweater \u2014 Ksh 1,200",
      "1 Fleece \u2014 Ksh 2,500",
      "1 Polo T-shirt \u2014 Ksh 900",
      "1 Tracksuit \u2014 Ksh 2,000",
      "2 Hijabs \u2014 Ksh 1,300",
      "1 Wrapper Skirt \u2014 Ksh 1,000",
    ],
    boysItems: [
      "2 Shirts \u2014 Ksh 2,000",
      "1 Sweater \u2014 Ksh 1,200",
      "2 Trousers \u2014 Ksh 2,800",
      "2 Socks \u2014 Ksh 400",
      "1 Tracksuit \u2014 Ksh 2,000",
      "1 Full Tie \u2014 Ksh 200",
      "1 Polo T-shirt \u2014 Ksh 900",
      "1 Fleece Jacket \u2014 Ksh 2,500",
    ],
  },
  {
    stage: "Key Stage 4",
    girls: "Ksh 18,300",
    boys: "Ksh 13,000",
    girlsItems: [
      "2 Pairs of Socks \u2014 Ksh 400",
      "2 Trousers \u2014 Ksh 3,000",
      "2 Skirts \u2014 Ksh 2,600",
      "2 Blouses \u2014 Ksh 2,000",
      "1 Full Tie \u2014 Ksh 200",
      "1 Sweater \u2014 Ksh 1,200",
      "1 Fleece \u2014 Ksh 2,800",
      "1 Polo T-shirt \u2014 Ksh 1,000",
      "1 Tracksuit \u2014 Ksh 2,400",
      "2 Hijabs \u2014 Ksh 1,500",
      "1 Wrapper Skirt \u2014 Ksh 1,200",
    ],
    boysItems: [
      "1 Sweater \u2014 Ksh 1,200",
      "2 Shirts \u2014 Ksh 2,000",
      "2 Trousers \u2014 Ksh 3,000",
      "2 Socks \u2014 Ksh 400",
      "1 Tracksuit \u2014 Ksh 2,400",
      "1 Full Tie \u2014 Ksh 200",
      "1 Polo T-shirt \u2014 Ksh 1,000",
      "1 Fleece Jacket \u2014 Ksh 2,800",
    ],
  },
];

const lunchFees = [
  { level: "PG, KG1, KG2", fee: "10,000" },
  { level: "KS1", fee: "12,500" },
  { level: "KS2", fee: "15,000" },
  { level: "KS3", fee: "17,000" },
  { level: "KS4", fee: "20,000" },
];

const lunchMenu = [
  { day: "Monday", meal: "Chapati + Beef Curry + Seasonal Fruit" },
  { day: "Tuesday", meal: "Pilau + Seasonal Fruit Juice" },
  { day: "Wednesday", meal: "Naan + Chicken Curry + Fruit" },
  { day: "Thursday", meal: "Biryani + Seasonal Fruit" },
  { day: "Friday", meal: "Chips + Chicken Fries / Pizza / Burger / Chicken Wrap, served with Seasonal Fruit Juice" },
];

const transportZones = [
  { zone: "Zone 1", mileage: "100m \u2013 1.5km", oneWay: "5,000", twoWay: "7,000" },
  { zone: "Zone 2", mileage: "1.6 km \u2013 3km", oneWay: "13,500", twoWay: "18,000" },
  { zone: "Zone 3", mileage: "3.1 km \u2013 4.5km", oneWay: "15,750", twoWay: "21,000" },
  { zone: "Zone 4", mileage: "4.6 km \u2013 6km", oneWay: "18,000", twoWay: "24,000" },
  { zone: "Zone 5", mileage: "6.1 km \u2013 7.5km", oneWay: "22,500", twoWay: "30,000" },
  { zone: "Zone 6", mileage: "7.6 km \u2013 9km", oneWay: "24,750", twoWay: "33,000" },
  { zone: "Zone 7", mileage: "9.1 km \u2013 11km", oneWay: "27,750", twoWay: "37,000" },
  { zone: "Zone 8", mileage: "11.1 km \u2013 15km", oneWay: "30,000", twoWay: "40,000" },
];

const extraCurricular = [
  { activity: "Swimming", fee: "7,000" },
  { activity: "Robotics and Coding", fee: "7,500" },
  { activity: "Soccer Academy", fee: "5,000" },
  { activity: "Taekwondo", fee: "5,000" },
  { activity: "Skating", fee: "5,000" },
];

const paymentTerms = [
  "Students enrolling for the first time at Mnara School Nairobi must pay a one-time non-refundable admission fee of Ksh 5,000.",
  "A continuous sibling discount of 5% is applicable on tuition fees for the second child, 7% for the third child, and 10% for the fourth child and subsequent children.",
  "Full fees are payable on or before the first day of the school term. The school reserves the right to suspend its services for students with pending fees by the end of the week of the term.",
  "An early payment discount of 10% applies to annual tuition fees paid in full on or before the first day of the term.",
  "The school will charge a monthly fee of 3% on the outstanding fee balance after the end of the first month of opening the school.",
  "The school reserves the right to review the tuition fees annually at 1.5%.",
  "If full-term fees are not cleared after the first day of the term, the student will not be allowed to attend classes, transport services, or participate in other school activities.",
  "Any new request for transport and lunch, and withdrawal from the same services, should be made in writing to the school.",
  "Any payment made will first be allocated to tuition fees.",
  "IGCSE examination fees, Checkpoint Assessment fees, school activities, field trips, and other optional trips for which the parents will be invoiced separately. The information on the stated areas will be shared with parents within a reasonable time. These payments shall be paid before or by the due date communicated.",
  "All payments must be made by direct bank deposit, transfer, or M-Pesa. Parents must provide the Accounts Office (finance@mnara.co.ke) with a hard or electronic copy of the proof of payment showing the family file number to avoid delay in crediting their accounts.",
  "Any dishonoured cheque from the parent will attract a penalty of Ksh 3,000 and affect the parent\u2019s credit rating.",
  "If a parent wishes to withdraw their child from the school, one term\u2019s advance notice of withdrawal must be given in writing, or one term\u2019s fees in lieu of notice are payable. School clearance will not be complete until all outstanding dues are fully settled.",
  "The school reserves the right to appoint a debt collector if the fees have been in arrears for more than one term.",
  "For those withdrawing from the school with an outstanding fee balance, if the school\u2019s efforts have not yielded any positive response from the parents, the school will take other measures, including legal resources, to enforce debt collection.",
];

function TuitionTable({ data }: { data: typeof tuitionData.earlyYears }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-off-white">
            <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Level</th>
            <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">Term 1 (Ksh)</th>
            <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">Term 2 (Ksh)</th>
            <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">Term 3 (Ksh)</th>
            <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">Annually (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i < data.length - 1 ? "border-b border-gray-100" : ""}>
              <td className="p-4 font-medium text-text-dark">{row.level}</td>
              <td className="p-4 text-right">{row.term1}</td>
              <td className="p-4 text-right">{row.term2}</td>
              <td className="p-4 text-right">{row.term3}</td>
              <td className="p-4 text-right font-medium text-text-dark">{row.annually}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExclusiveList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-text-muted text-sm">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function FeeStructurePage() {
  return (
    <StandardPage
      title="Fee Structure"
      image="/images/hero-1.jpg"
      breadcrumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Fee Structure' }]}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <p className="text-center text-text-muted">
          Effective 11th July 2025. For questions or clarification, please{' '}
          <a href="/contact" className="text-primary hover:underline">contact us</a>.
        </p>

        {/* ── Tuition Fees ──────────────────────────────── */}
        <section className="space-y-10">
          <div>
            <span className="section-label">Tuition Fees</span>
            <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-4">
              Annual &amp; Termly Fees by Level
            </h2>
            <p className="text-text-muted">
              Tuition includes one diary per academic year, ICT, Art and Design, and Deenyaat subjects.
            </p>
          </div>

          {/* Early Years */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-text-dark">Early Years Foundation School</h3>
            <TuitionTable data={tuitionData.earlyYears} />
            <div className="bg-off-white rounded-xl p-5 border border-gray-100">
              <p className="font-medium text-text-dark text-sm mb-2">Tuition is exclusive of:</p>
              <ExclusiveList items={tuitionExclusive} />
            </div>
          </div>

          {/* Primary */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-text-dark">Primary School</h3>
            <TuitionTable data={tuitionData.primary} />
            <div className="bg-off-white rounded-xl p-5 border border-gray-100">
              <p className="font-medium text-text-dark text-sm mb-2">Tuition is exclusive of:</p>
              <ExclusiveList items={primaryExclusive} />
            </div>
          </div>

          {/* Lower Secondary */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-text-dark">Lower Secondary School</h3>
            <TuitionTable data={tuitionData.lowerSecondary} />
            <div className="bg-off-white rounded-xl p-5 border border-gray-100">
              <p className="font-medium text-text-dark text-sm mb-2">Tuition excludes:</p>
              <ExclusiveList items={secondaryExclusive} />
            </div>
          </div>

          {/* Upper Secondary */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-text-dark">Upper Secondary School</h3>
            <TuitionTable data={tuitionData.upperSecondary} />
          </div>
        </section>

        {/* ── Mandatory Charges ──────────────────────────── */}
        <section className="space-y-8">
          <div>
            <span className="section-label">Mandatory Charges</span>
            <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-4">
              One-Time &amp; Required Fees
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-off-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="font-heading font-bold text-text-dark text-lg">Admission Fee</p>
              <p className="text-2xl font-bold text-primary mt-2">Ksh 5,000</p>
              <p className="text-text-muted text-sm mt-1">Payable once at admission</p>
            </div>
            <div className="bg-off-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="font-heading font-bold text-text-dark text-lg">Caution Fee</p>
              <p className="text-2xl font-bold text-primary mt-2">Ksh 5,000</p>
              <p className="text-text-muted text-sm mt-1">Payable once at admission</p>
            </div>
            <div className="bg-off-white rounded-2xl p-6 border border-gray-100 text-center">
              <p className="font-heading font-bold text-text-dark text-lg">Testing Fee</p>
              <p className="text-2xl font-bold text-primary mt-2">Ksh 1,000</p>
              <p className="text-text-muted text-sm mt-1">Payable once before admission</p>
            </div>
          </div>

          {/* Uniforms */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-text-dark">Uniforms</h3>
              <p className="text-text-muted text-sm mt-1">
                Prices below are for standard sizes. Parents may purchase additional pairs.
                Black leather and sports shoes are purchased separately by parents.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {uniformData.map((stage) => (
                <div key={stage.stage} className="bg-off-white rounded-2xl p-6 border border-gray-100 space-y-4">
                  <h4 className="font-heading font-bold text-text-dark">{stage.stage}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-primary text-sm mb-2">Girls &mdash; {stage.girls}</p>
                      <ul className="text-text-muted text-xs space-y-1">
                        {stage.girlsItems.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-primary text-sm mb-2">Boys &mdash; {stage.boys}</p>
                      <ul className="text-text-muted text-xs space-y-1">
                        {stage.boysItems.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── School Lunch Program ──────────────────────── */}
        <section className="space-y-8">
          <div>
            <span className="section-label">School Lunch Program</span>
            <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-4">
              Lunch Fees &amp; Weekly Menu
            </h2>
            <p className="text-text-muted">Lunch fees are charged per term.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-off-white">
                    <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Level</th>
                    <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">Lunch Fee (Ksh)</th>
                  </tr>
                </thead>
                <tbody>
                  {lunchFees.map((row, i) => (
                    <tr key={i} className={i < lunchFees.length - 1 ? "border-b border-gray-100" : ""}>
                      <td className="p-4 font-medium text-text-dark">{row.level}</td>
                      <td className="p-4 text-right">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-off-white rounded-2xl p-6 border border-gray-100 space-y-3">
              <h4 className="font-heading font-bold text-text-dark">Weekly Menu</h4>
              {lunchMenu.map((item) => (
                <div key={item.day} className="flex gap-3 text-sm">
                  <span className="font-medium text-text-dark w-24 shrink-0">{item.day}</span>
                  <span className="text-text-muted">{item.meal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Transport ─────────────────────────────────── */}
        <section className="space-y-8">
          <div>
            <span className="section-label">Optional Charges</span>
            <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-4">
              School Transport
            </h2>
            <p className="text-text-muted">
              Any special arrangement will be charged Ksh 500 per student, payable upfront.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-off-white">
                  <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Zone</th>
                  <th className="text-left p-4 font-heading font-bold text-text-dark border-b border-gray-200">Mileage</th>
                  <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">One Way (Ksh)</th>
                  <th className="text-right p-4 font-heading font-bold text-text-dark border-b border-gray-200">Two Way (Ksh)</th>
                </tr>
              </thead>
              <tbody>
                {transportZones.map((row, i) => (
                  <tr key={i} className={i < transportZones.length - 1 ? "border-b border-gray-100" : ""}>
                    <td className="p-4 font-medium text-text-dark">{row.zone}</td>
                    <td className="p-4 text-text-muted">{row.mileage}</td>
                    <td className="p-4 text-right">{row.oneWay}</td>
                    <td className="p-4 text-right">{row.twoWay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Extra-Curricular Activities ────────────────── */}
        <section className="space-y-8">
          <div>
            <span className="section-label">Extra-Curricular Activities</span>
            <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-4">
              Activities &amp; Fees Per Term
            </h2>
            <p className="text-text-muted">
              All extra-curricular activities are payable upfront. The fee payment system prioritises tuition fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extraCurricular.map((item) => (
              <div key={item.activity} className="bg-off-white rounded-2xl p-5 border border-gray-100 flex items-center justify-between">
                <span className="font-medium text-text-dark">{item.activity}</span>
                <span className="text-primary font-bold">Ksh {item.fee}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Payment Terms ──────────────────────────────── */}
        <section className="space-y-6">
          <div>
            <span className="section-label">Important</span>
            <h2 className="font-heading text-3xl font-bold text-text-dark mt-2 mb-4">
              School Fees Payment Terms
            </h2>
          </div>

          <ol className="space-y-4 text-text-muted leading-relaxed list-decimal pl-5">
            {paymentTerms.map((term, i) => (
              <li key={i} className="pl-1">{term}</li>
            ))}
          </ol>
        </section>
      </div>
    </StandardPage>
  );
}
