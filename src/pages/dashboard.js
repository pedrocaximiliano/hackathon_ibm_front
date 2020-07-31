import React, { useState, useEffect } from 'react';
import { StackedAreaChart, Grid, YAxis, ProgressCircle, PieChart, AreaChart, LineChart } from 'react-native-svg-charts'

import { View, ActivityIndicator, StyleSheet, Text, SafeAreaView, ScrollView, Image } from 'react-native';

import { Text as TextCharts } from 'react-native-svg';
export default function dashboard() {

    const [loading, setLoading] = useState(true);

    const [deathPercentageWOW, setDeathPercentageWOW] = useState(0); 

    const [totalPopulation, setTotalPopulation] = useState(0); 

    const [confirmed, setConfirmed] = useState([]);

    const [deaths, setDeaths] = useState([]); 

    const [teste, setTeste] = useState([]); 

    const [teste1, setTeste1] = useState([]); 

    const [confirmedPercentage, setConfirmedPercentage] = useState([]);


    useEffect(() => {
        try {
            fetch(`https://api.weather.com/v3/wx/disease/tracker/country/60day?format=json&geocode=-22.91216,-43.17501&apiKey=d522aa97197fd864d36b418f39ebb323`
            ).then(
                response => response.json()
            ).then(
                data => (
                    setDeathPercentageWOW(data.covid19.deathPercentageWOW),
                    setTotalPopulation(data.covid19.totalPopulation),
                    setConfirmedPercentage(data.covid19.confirmedPercentageWOW),
                    setDeaths(data.covid19.deaths),
                    setConfirmed(data.covid19.confirmed),
                    setLoading(false)
                ),
            )
        } catch (error) {
            alert('erro, verifique a conexão com a internet');
        }
    }, [])

    useEffect(() => {
        setTeste(confirmed.reverse());
        setTeste1(deaths.reverse());
        


    }, [confirmed])


    // const data1 = [500000, 100000, 400000, 950000];

    // const piechart = data1.map((value, index) => ({
    //     value,
    //     key: `${index}` - `${value}`,
    //     svg: {
    //         fill: 'red',
    //     }
    // }));

    // const Label = ({ slices }) => {
    //     return slices.map((slice, index) => {
    //         const { pieCentroid, data } = slice;
    //         return (
    //             <TextCharts
    //                 key={`label-${index}`}
    //                 x={pieCentroid[0]}
    //                 y={pieCentroid[1]}
    //                 fill="black"
    //                 textAnchor={'middle'}
    //                 aligmentBaseline={'middle'}
    //             >
    //                 {data.value}
    //             </TextCharts >
    //         )

    //     })
    // }

    return (

        loading ? (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" animating={loading} color="#2A56C6" />
            </View>
        ) : (
                <>
                    <SafeAreaView>
                        <ScrollView>
                            <View>
                                <Text>
                                    População total no brasil {totalPopulation}
                                </Text>

                            </View>
                            <View style={styles.areChartsContainer}>
                                <Text>confirmações em 60 dias {confirmed[0]} mil</Text>
                                <View style={styles.areChartsView}>
                                    <YAxis
                                        data={teste}
                                        svg={{
                                            fill: 'grey',
                                            fontSize: 10,
                                        }}
                                        numberOfTicks={10}
                                    />
                                    <LineChart
                                        style={{ flex: 1, marginLeft: 16 }}
                                        data={teste}
                                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                                    >
                                        <Grid />
                                    </LineChart>
                                </View>
                                <Text>Mortes em 60 dias {deaths[0]} mil</Text>
                                <View style={styles.areChartsView}>
                                    <YAxis
                                        data={teste1}
                                        svg={{
                                            fill: 'grey',
                                            fontSize: 10,
                                        }}
                                        numberOfTicks={10}
                                    />
                                    <LineChart
                                        style={{ flex: 1, marginLeft: 16 }}
                                        data={teste1}
                                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                                    >
                                        <Grid />
                                    </LineChart>
                                </View>

                            </View>
                            <View style={styles.graficContainer}>
                                <View style={styles.graficView}>
                                    <Text style={styles.text}>mortes %</Text>
                                    <ProgressCircle
                                        style={{ height: 80, width: 80 }}
                                        progress={deathPercentageWOW / 100}
                                        progressColor={'rgb(134, 65, 244)'}
                                    >
                                        <View style={styles.progressCharts}>
                                            <Text>{`${deathPercentageWOW} %`}</Text>
                                        </View>
                                    </ProgressCircle>

                                </View>
                                <View style={styles.graficView}>
                                    <Text style={styles.text}>confirmados %</Text>
                                    <ProgressCircle
                                        style={{ height: 80, width: 80 }}
                                        progress={confirmedPercentage / 100}
                                        progressColor={'rgb(134, 65, 244)'}
                                    >
                                        <View style={styles.progressCharts}>
                                            <Text>{`${confirmedPercentage} %`}</Text>
                                        </View>
                                    </ProgressCircle>

                                </View>
                                {/* <View style={styles.graficView}>
                                    <Text style={styles.text}>grafico</Text>
                                    <PieChart
                                        style={{ height: 90, width: 100 }}
                                        data={piechart}
                                    >
                                        <Label />
                                    </PieChart>
                                </View> */}
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
        flex: 1,
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
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});