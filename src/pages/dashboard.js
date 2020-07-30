import React, { useState, useEffect } from 'react';
import { StackedAreaChart, LineChart, Grid, YAxis, ProgressCircle, PieChart } from 'react-native-svg-charts'

import { View, ActivityIndicator, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';


import * as shape from 'd3-shape'
export default function dashboard() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {

        // chamar a API
        setTimeout(function () {
            setLoading(false);
        }, 3000);
    }, [])


     // recebe um array para montar o grafico pieCharts
    const data1 = [50, 10, 40, 95];

    const piechart = data1.map((value, index) => ({
        value,
        key: `${index}` - `${value}`,
        svg: {
            fill: '#2A56C6',
        }
    }));

    // para o graáfico de risco e necessario passar um decimal, acredito que esse valor vem da API.

    // recebe o objeto para montar o grafico de infectados do mês
    const data = [
        {
            month: new Date(2020, 2, 1),
            infects: 1600,
            testing: 1440,

        },
        {
            month: new Date(2020, 2, 1),
            infects: 3000,
            testing: 960,

        },
        {
            month: new Date(2020, 2, 1),
            infects: 5000,
            testing: 900,

        },
    ]

    const colors = ['#cc66ff', '#eeccff']
    const keys = ['infects', 'testing']
    return (
        loading ? (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" animating={loading} color="#2A56C6" />
            </View>
        ) : (
                <>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.areChartsContainer}>
                                <Text>Gráfico dde aumento de infectados por mês</Text>
                                <View style={styles.areChartsView}>
                                    <StackedAreaChart
                                        style={{ flex: 1 }}
                                        contentInset={{ top: 10, bottom: 10 }}
                                        data={data}
                                        keys={keys}
                                        colors={colors}
                                        curve={shape.curveNatural}
                                    >
                                        <Grid />
                                    </StackedAreaChart>
                                    <YAxis
                                        style={{ position: 'absolute', top: 0, bottom: 0 }}
                                        data={StackedAreaChart.extractDataPoints(data, keys)}
                                        contentInset={{ top: 10, bottom: 10 }}
                                        svg={{
                                            fontSize: 10,
                                            fill: 'black',
                                            stroke: 'black',
                                            strokeWidth: 0.1,
                                            alignmentBaseline: 'baseline',
                                            baselineShift: '3',
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={styles.graficContainer}>
                                <View style={styles.graficView}>
                                <Text style={styles.text}>grafico</Text>
                                    <ProgressCircle
                                        style={{ height: 90, width: 100 }}
                                        progress={0.7}
                                        progressColor={'rgb(134, 65, 244)'}
                                        startAngle={-Math.PI * 0.8}
                                        endAngle={Math.PI * 0.8}
                                    >
                                        <View style={styles.progressCharts}>
                                            <Text>25%</Text>
                                        </View>
                                    </ProgressCircle>

                                </View>
                                <View style={styles.graficView}>
                                <Text style={styles.text}>grafico</Text>
                                    <PieChart
                                        style={{ height: 90, width: 100 }}
                                        data={piechart}
                                    >
                                    </PieChart>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </>
            )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    areChartsContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 15,
    },
    areChartsView: {
        flexDirection: 'row',
         height: 200, 
         width: 200,
    },
    graficContainer: {
        flex: 1, flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around',
     },
     progressCharts: {
        justifyContent: 'center', 
        alignItems: 'center',
     },
     text: {
     fontSize: 10,
     },
     graficView: {
        width: 130, 
        height: 150, 
        borderRadius: 15,
        backgroundColor: '#ccc', 
        justifyContent: 'space-around',
        alignItems: 'center',
     }
});