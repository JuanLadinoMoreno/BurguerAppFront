import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// const colors = ['#CD5C08', '#1E3E62', '#FF6500']
// const colors = ['#ec6809', '#d86110', '#c45917', '#b0521d', '#9c4b24', '#88442b', '#733c32', '#5f3539', '#4b2e40', '#372746', '#231f4d', '#0f1854']
const colors = ['#fee7a6', '#fcdb98', '#fbd089', '#f9c47b', '#f7b96d', '#f6ad5f',
  '#f4a250', '#f39642', '#f18b34', '#ef7f26', '#ee7417', '#ec6809']

function Graphics({ salesForMonth }) {
  return (
    <>
      {console.log(salesForMonth)}


      <div className="">
        <div className="row">

          <div className="col-lg-6 col-md-12">
            <h3 className='card-title text-center my-5'>Ventas total por mes</h3>
            <ResponsiveContainer width="100%" aspect={2}>
              <BarChart width={500}
                height={300}
                data={salesForMonth}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" >
                  {salesForMonth.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          




        </div>
      </div>



    </>
  )
}

export default Graphics