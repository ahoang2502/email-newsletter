"use server";

import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

interface Props {
  userEmail: string[];
  subject: string;
  content: string;
}

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS,
  secretAccessKey: process.env.AWS_SECRET,
  region: "ap-southeast-2",
});

AWS.config.getCredentials(function (error) {
  if (error) console.log("🔴 AWS Error ", error.stack);
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const adminMail = process.env.ADMIN_EMAIL;

// Create a transporter for nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});

export const sendEmail = async ({ userEmail, subject, content }: Props) => {
  try {
    const response = await transporter.sendMail({
      from: adminMail,
      to: userEmail,
      subject: subject,
      html: content,
    });

    return response;
  } catch (error) {
    console.log("🔴 [SEND_EMAIL] ", error);
    throw error;
  }
};
