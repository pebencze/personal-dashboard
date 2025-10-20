import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import type { BarChartProps, BarSeries } from '@mui/x-charts/BarChart';
import { transactions, availableMonths } from '../data/mockData';
import { getCategories } from './CategoryBreakdownView';

const config: Partial<BarChartProps> = {
  height: 350,
  margin: { left: 0 },
  yAxis: [{ width: 50 }],
  hideLegend: false,
};

export default function CategoryBarchart() {

    const seriesDataMap: Map<string, Array<number>> = new Map()

    for (let i = 0; i < availableMonths.length; i++) {
        const monthdata = transactions.filter(t => t.date.startsWith(availableMonths[i]))
        getCategories(monthdata).forEach(category => {
            if (!seriesDataMap.has(category.category)) {
                seriesDataMap.set(category.category, [])
            }
            seriesDataMap.get(category.category)?.push(category.amountSpent)
        }
        )
    }
    
    const series: BarSeries[] = Array.from(seriesDataMap.entries()).map(([category, data]) => ({
        data: data,
        stack: 'A',
        label: category,
    }));

    const monthLabels = availableMonths.map(month => new Date(month).toLocaleString('en-US', { month: 'long' }));

  return (
    <div className='w-1/3 text-center'>
      <Typography>Monthly Expense Trend</Typography>
      <BarChart
        series={series}
        xAxis={[{scaleType: 'band', data: monthLabels}]}
        {...config}
      />
    </div>
  );
}
