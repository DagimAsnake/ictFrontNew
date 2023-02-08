import React from "react";
import { Page, Text, Document, Image } from "@react-pdf/renderer";
// import kena from "../../assets/kena.jpg";

// const styles = StyleSheet.create({
//   image: {
//     width: 20,
//     height: 20,
//   },
// });

function ViewReport({ data }) {
  console.log(data);
  return (
    <>
      <Document>
        <Page>
          <Text key={data._id}>
            <Text>{data.month}</Text>
            <Text>{data.companyName}</Text>
            {/* <Text>{data.total_number_of_worker}</Text> */}
            <Text>{data.totalMale}</Text>
            <Text>{data.totalFemale}</Text>
            <Text>{data.totalExp}</Text>
            <Text>{data.totalTotal}</Text>

            <Text>{data.hiredMale}</Text>
            <Text>{data.hiredFemale}</Text>
            <Text>{data.hiredExp}</Text>
            <Text>{data.hiredTotal}</Text>

            <Text>{data.firedMale}</Text>
            <Text>{data.firedFemale}</Text>
            <Text>{data.firedExp}</Text>
            <Text>{data.firedTotal}</Text>

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
            {/* <Text>{data.additional_file}</Text> */}
          </Text>
          <Image
            src={"http://localhost:8080/" + data.additional_file}
            // src={kena}
            // style={styles.image}
          />
        </Page>
      </Document>
    </>
  );
}

export default ViewReport;
