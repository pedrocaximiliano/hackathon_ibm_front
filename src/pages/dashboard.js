import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
 
export default function dashboard() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                bananas: 1440,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 800,
                bananas: 960,
                cherries: 3640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                bananas: 900,
                cherries: 640,
                dates: 400,
            },
        ]
 
        const colors = ['#ff0000', '#aa00ff', '#cc66ff', '#eeccff']
        const keys = ['apples', 'bananas', 'cherries', 'dates']
        const svgs = [
            { onPress: () => console.log('infectados') },
            { onPress: () => console.log('bananas') },
            { onPress: () => console.log('cherries') },
            { onPress: () => console.log('dates') },
        ]
 
        return (
            <StackedAreaChart
                style={{ height: 200, paddingVertical: 16 }}
                data={data}
                keys={keys}
                colors={colors}
                showGrid={false}
                svgs={svgs}
            />
        )
}