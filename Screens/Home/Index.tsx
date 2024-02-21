import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import { Box, HStack, VStack } from '@gluestack-ui/themed';
import { Header } from '../../Components/Home/Index';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { getDeviceData } from '../../Config/Action';

const Home = () => {
  const [temperature, setTemperature] = useState(null);
  const [pHvalue, setpHvalue] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDeviceData();
        if (data && data.ESP32_001) {
          setTemperature(data.ESP32_001.temperature);
          setpHvalue(data.ESP32_001.ph_sensor.pH_value);
        }
      } catch (error) {
        console.error('Error fetching device data:', error);
      }
    };

    // Initial fetch
    fetchData();

    // Fetch data every 1 milliseconds
    const intervalId = setInterval(fetchData, 1);

    // Clean up the intervalr
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once

  const chartConfig = {
    barRadius: 10,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '5',
      strokeWidth: '3',
      stroke: '#D7BD9B',
    },
  };

  const renderChart = (data, yAxisSuffix, backgroundColor, strokeColor, title = null) => (
    <Box alignItems="center">
      <LineChart
        data={{
          labels: ['10:00', '11:00', '12:00', '13:00'],
          datasets: [
            {
              data,
            },
          ],
        }}
        
        width={360}
        height={220}
        yAxisSuffix={yAxisSuffix}
        yAxisInterval={1}
        chartConfig={{
          ...chartConfig,
          backgroundColor,
          backgroundGradientFrom: backgroundColor,
          backgroundGradientTo: backgroundColor,
          strokeColor,
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 8,
        }}
      />
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
    </Box>
  );

  return (
    <ScrollView flex={1} backgroundColor="#0C356A">
      <Box>
        <Box padding={15}>
          <Header />
          <Box mt={25}>
            <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold' }}>
              Hi, Denny!
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 16,
                color: '#ADADAD',
                fontWeight: 'bold',
              }}>
              Monitor Hari Ini
            </Text>
          </Box>
        </Box>
        <Box
          mt={25}
          backgroundColor="white"
          borderTopStartRadius={15}
          borderTopEndRadius={15}>
          <VStack mt={10} space="xl" padding={15}>
            <Box
              width={'100%'}
              rounded={10}
              backgroundColor="#E6F6FF"
              py={20}
              px={10}>
              <Text style={{ fontWeight: 'bold' }}>
                Status air :
                <Text style={{ color: '#5AC7FE', fontWeight: 'bold' }}>
                   Normal
                </Text>
              </Text>
            </Box>
            <Box>
              <VStack mb={20} width={'100%'} space="md">
                <HStack space="sm">
                  <Box
                    flex={1}
                    alignItems="center"
                    backgroundColor="#FFEDD6"
                    width={'90%'}
                    p={10}
                    rounded={15}>
                    <Text style={{ fontWeight: 'bold' }}>Potential Hydrogen</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
                      {pHvalue}
                    </Text>
                    <Text>pH</Text>
                  </Box>
                  <Box
                    flex={1}
                    alignItems="center"
                    backgroundColor="#D6DCFF"
                    width={'90%'}
                    p={10}
                    rounded={15}>
                    <Text style={{ fontWeight: 'bold' }}>Suhu</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
                    {temperature}
                    </Text>
                    <Text>°C</Text>
                  </Box>
                </HStack>
                <HStack space="sm">
                  <Box
                    flex={1}
                    alignItems="center"
                    backgroundColor="#FFD6F5"
                    width={'90%'}
                    p={10}
                    rounded={15}>
                    <Text style={{ fontWeight: 'bold' }}>Dissolved oxygen</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 40 }}>8</Text>
                    <Text>mg/L</Text>
                  </Box>
                  <Box
                    flex={1}
                    alignItems="center"
                    backgroundColor="#D6FFE1"
                    width={'90%'}
                    p={10}
                    rounded={15}>
                    <Text style={{ fontWeight: 'bold' }}>Salinitas</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 40 }}>18</Text>
                    <Text>g/kg</Text>
                  </Box>
                </HStack>
              </VStack>
              {renderChart(
                [Math.random(), Math.random(), Math.random(), pHvalue],
                'pH',
                '#FFEDD6',
                '#D7BD9B',
                "Potential Hydrogen"
              )}
            </Box>
            <Box>
              {renderChart(
                [30, 20, Math.random(), temperature],
                '°C',
                '#D6DCFF',
                '#9DA6D8',
                "Suhu"
              )}
            </Box>
            <Box>
              {renderChart([8, 2, 5, 3], 'mg/L', '#FFD6F5', '#D59AC7', "Dissolved oxygen")}
            </Box>
            <Box>
              {renderChart([8, 2, 5, 3], 'g/kg', '#D6FFE1', '#8FCFA0', "Salinitas")}
            </Box>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Home;
