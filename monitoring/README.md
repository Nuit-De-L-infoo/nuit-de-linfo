# Carbon Impact Monitoring Dashboard

## Overview

This project provides a **Grafana-based dashboard** to monitor the **carbon impact** of CPU usage in your infrastructure. The dashboard collects **system CPU usage data** from a Prometheus instance and visualizes it as an estimated carbon emission based on a predefined conversion factor. This allows you to track and assess the sustainability of your infrastructure in terms of carbon footprint.

### Features
- **Current Carbon Impact**: A gauge showing real-time CO2 emissions.
- **Carbon Impact Over Time**: A graph displaying historical carbon emissions over time.
- **Total Carbon Impact**: A stat panel showing the total CO2 emissions in the last 24 hours.

## Prerequisites

To set up the monitoring dashboard, you will need the following:

- **Grafana**: For visualizing the data.
- **Prometheus**: To collect the system metrics, especially `node_cpu_seconds_total`.
- **Node Exporter** (optional): For exposing system metrics to Prometheus.

### Tools and Technologies:
- Grafana (for dashboard creation)
- Prometheus (for time-series metrics collection)
- Node Exporter (for exposing system metrics like CPU usage)

## Setup Instructions

### 1. **Install Prometheus and Node Exporter**

If you do not already have Prometheus and Node Exporter set up, you can install and configure them as follows:

#### Prometheus Installation:

You can follow the official [Prometheus installation guide](https://prometheus.io/docs/prometheus/latest/installation/) for your operating system.

#### Node Exporter:

Node Exporter is used to collect system metrics, such as CPU, memory, disk, and network usage.

1. Download and install Node Exporter from [the official website](https://prometheus.io/docs/guides/node-exporter/).
2. Run Node Exporter with the following command:

    ```bash
    ./node_exporter
    ```

3. Ensure that Prometheus is scraping Node Exporter by adding it to your `prometheus.yml` configuration:

    ```yaml
    scrape_configs:
      - job_name: 'node_exporter'
        static_configs:
          - targets: ['localhost:9100']
    ```

4. Restart Prometheus to apply the changes.

### 2. **Install Grafana**

Follow the official [Grafana installation guide](https://grafana.com/docs/grafana/latest/installation/) for your operating system.

After installation, start Grafana:

```bash
sudo systemctl start grafana-server
