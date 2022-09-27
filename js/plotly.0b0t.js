const url = 'https://api.allorigins.win/raw?url=' + encodeURIComponent("https://stats.minecraftservers.org/data/540862");

$(document).ready(function () {
    getServerData();
});

async function getServerData() {
    Plotly.purge("plot");
    const h = $('#plot').data('height');
    try {
      const response = await fetch(url, {
        method: 'GET'
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const json = await response.json();

      let onlineThisWeek = {
        x: json.online[1].data.map(e => new Date(e[0])),
        y: json.online[1].data.map(e => e[1]),
        name: "This Week",
        type: "line",
        line: {color: '#33FF00'}
      };

      let onlineLastWeek = {
          x: json.online[0].data.map(e => new Date(e[0])),
          y: json.online[0].data.map(e => e[1]),
          name: "Last Week",
          type: "line",
          visibility: "hidden",
          line: {color: '#A9A9A9'}
      };

      let data = [onlineLastWeek, onlineThisWeek];

      let layout = {
          autosize: true,
          height: h,
          font: {
              size: 10,
              color: 'white'
          },
          plot_bgcolor: 'transparent',
          paper_bgcolor: 'transparent',
          xaxis: {
              title: 'weekday',
              nticks: 7,
              tickformat: '%A'
          },
          yaxis: {
              title: 'players'
          },
          legend: {
              orientation: "h",
              yanchor: "bottom",
              y: 1.02,
              xanchor: "right",
              x: 1
          },
          margin: {
              l: 50,
              r: 50,
              b: 50,
              t: 50,
              pad: 4
          }
      };

      var config = {responsive: true}

      Plotly.newPlot("plot", data, layout, config);

      window.setTimeout(getServerData, 10 * 60 * 1000);

    } catch (err) {
      console.log(err);
    }
  }