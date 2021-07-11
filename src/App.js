import {Chart} from "react-google-charts"

const data = [{
  year: 2000,
  value: 282172000
},
{
  year: 2001,
  value: 285082000
},
{
  year: 2002,
  value: 287804000
},
{
  year: 2003,
  value: 290326000
},
{
  year: 2004,
  value: 293046000
},
{
  year: 2005,
  value: 295753000
},
{
  year: 2006,
  value: 298593000
},
{
  year: 2008,
  value: 304375000
},
{
  year: 2009,
  value: 307007000
},
{
  year: 2010,
  value: 309330000
},
{
  year: 2011,
  value: 311583000
},
{
  year: 2012,
  value: 313874000
},
{
  year: 2013,
  value: 316129000
},
{
  year: 2014,
  value: 319113000
},
{
  year: 2015,
  value: 321442000
},
{
  year: 2016,
  value: 323100000
},
{
  year: 2017,
  value: 325719000
},
{
  year: 2018,
  value: 327167000
}
]

function App() {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[["x", "Population"], ...data.map((value) => [value.year, value.value])]}
      options={{
        hAxis: {
          title: 'Year',
        },
        vAxis: {
          title: 'Population',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default App;
