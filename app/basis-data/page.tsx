"use client"
import React from 'react';
import { Chart } from 'react-google-charts';

const ChartComponent = () => {
    const data_map = [
        ['Provinsi', 'Produksi Padi (ton)'],
        ['Aceh', 1646941.44],
        ['Sumatera Utara', 2068481.33],
        ['Sumatera Barat', 1421092.02],
        ['Riau', 229653.87],
        ['Jambi', 321871.07],
        ['Sumatera Selatan', 2750155.69],
        ['Bengkulu', 286254.72],
        ['Lampung', 2539088.6],
        ['Bangka-Belitung', 58374.15],
        ['Kepulauan Riau', 797.71],
        [{v:'ID-JK', f:'Jakarta'}, 3510.65],
        ['Jawa Barat', 9248606.09],
        ['Jawa Tengah', 9617269.44],
        ['Yogyakarta', 537358.85],
        ['Jawa Timur', 9792575],
        ['Banten', 1648628.27],
        ['Bali', 622328.03],
        ['Nusa Tenggara Barat', 1431792.21],
        [{v:'ID-NT', f:'Nusa Tenggara Timur'}, 781903.75],
        [{v:'ID-KB', f:'Kalimantan Barat'}, 761528.78],
        ['Kalimantan Tengah', 412028.62],
        ['Kalimantan Selatan', 903540.61],
        ['Kalimantan Timur', 248350.36],
        [{v:'ID-KU', f:'Kalimantan Utara'}, 32683],
        ['Sulawesi Utara', 262375.64],
        ['Sulawesi Tengah', 832820.11],
        ['Sulawesi Selatan', 5173740.18],
        ['Sulawesi Tenggara', 513291.82],
        ['Gorontalo', 242389.64],
        ['Sulawesi Barat', 319619.22],
        [{v:'ID-MA', f:'Maluku'}, 102382.33],
        ['Maluku Utara', 34929.27],
        [{v:'ID-PB', f:'Papua Barat'}, 25457.78],
        ['Papua', 216901.27]
    ];

    const options_map = {
        region: 'ID',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {
            colors: ['#ff4c4c', '#FAB733', '#69B34C'], // Red to Yellow to Green
            minValue: 797.71, // Minimum value for the color gradient
            maxValue: 9792575, // Maximum value for the color gradient (adjust as needed)
        },
        backgroundColor: '#f2f2f2',
        datalessRegionColor: '#ffffff',
        defaultColor: '#f5f5f5',
        width: '100%',
        height: '100%',
    };

    const data_bar = [
        ['Tahun', 'Produksi (ton)'],  // Adding headers to match Google Charts format
        ['2018', 59200533.72],
        ['2019', 54604033.34],
        ['2020', 54649202.24],
        ['2021', 53776236.17],
        ['2022', 54338410.44],
        ['2023', 53963913.2]
    ];

    const options_bar = {
        title: 'Produksi Beras Indonesia (ton) per Tahun',
        hAxis: {
            title: 'Tahun'
        },
        vAxis: {
            title: 'Produksi (ton)',
            minValue: 0  // Ensure y-axis starts at 0
        },
        bar: {groupWidth: "95%"},
    };

    const data_line = [
        ['Tahun', 'Produksi (ton)'],  // Adding headers to match Google Charts format
        ['2018', 59200533.72],
        ['2019', 54604033.34],
        ['2020', 54649202.24],
        ['2021', 53776236.17],
        ['2022', 54338410.44],
        ['2023', 53963913.2]
    ];

    const options_line = {
        title: 'Produksi Beras Indonesia (ton) per Tahun',
        hAxis: {
            title: 'Tahun'
        },
        vAxis: {
            title: 'Produksi (ton)',
            minValue: 0  // Ensure y-axis starts at 0
        }
        // bar: {groupWidth: "95%"},
    };

    const options_bar2 = {
        title: 'Produksi Beras Indonesia (ton) per Tahun',
        hAxis: {
            title: 'Tahun'
        },
        vAxis: {
            title: 'Produksi (ton)',
            minValue: 0  // Ensure y-axis starts at 0
        }
        // bar: {groupWidth: "95%"},
    };



    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '90%', height: '400px', marginBottom: '50px' }}>
                <Chart
                    chartType="GeoChart"
                    data={data_map}
                    options={options_map}
                    width="100%"
                    height="100%"
                    legendToggle
                />
            </div>

            // ini emang rada aneh tp di dokumentasi kalo side by side pake table

            <table className="columns">
                <tr>
                    <td>
                        <div style={{ width: '90%', height: '400px' }}>
                            <Chart
                                chartType="ColumnChart"
                                data={data_bar}
                                options={options_bar}
                                width="100%"
                                height="100%"
                                legendToggle
                            />
                        </div>
                    </td>
                    <td>
                        <div style={{ width: '90%', height: '400px' }}>
                            <Chart
                                chartType="LineChart"
                                data={data_line}
                                options={options_line}
                                width="100%"
                                height="100%"
                                legendToggle
                            />
                        </div>
                    </td>
                </tr>
            </table>

            <div style={{ width: '90%', height: '400px', marginBottom: '50px' }}>
                <Chart
                    chartType="BarChart"
                    data={data_map}
                    options={options_bar2}
                    // width="100%"
                    // height="100%"
                    legendToggle
                />
            </div>


        </div>
    );
};

export default ChartComponent;
