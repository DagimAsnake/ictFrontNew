import React from "react";
import { Page, Text, Document } from "@react-pdf/renderer";

function ViewReport({ data }) {
  console.log(data);
  return (
    <>
      <Document>
        <Page>
          <Text>
            <Text key={data._id}>
              <Text>{data.month}</Text>
              <Text>{data.companyName}</Text>
              {/* <Text>{data.total_number_of_worker}</Text> */}
              <Text>{data.cumulative_new_jobs_created}</Text>
              <Text>{data.average_worker_per_month}</Text>
              {/* <Text>{data.number_of_workers_resigned}</Text> */}
              {/* <Text>{data.number_of_workers_hired}</Text> */}
              <Text>{data.turn_over_rate}</Text>
              <Text>{data.job_creation}</Text>
              <Text>{data.planned_monthly_report}</Text>
              <Text>{data.amount_of_export}</Text>
              <Text>{data.monthly_import_substitute}</Text>
              <Text>{data.amount_import_substitute}</Text>
              <Text>{data.certificate_type}</Text>
              <Text>{data.number_of_trainee}</Text>
              <Text>{data.duration_of_training}</Text>
              <Text>{data.additional_file}</Text>
            </Text>
          </Text>
        </Page>
      </Document>
    </>
  );
}

export default ViewReport;
