import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Input,
  Heading,
  Container,
  HStack,
  Button,
  Textarea,
  FormControl,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
  Flex,
} from "@chakra-ui/react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const userId = process.env.REACT_APP_USER_ID;

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSubmitted(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(false);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setStatus("success");
        } else {
          setStatus("error");
        }
      });
  };

  return (
    <Container
      id="contact"
      maxW="container.xl"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Heading fontSize="3xl" textAlign="center">
        {" "}
        Contact Me
      </Heading>
      <form ref={form} onSubmit={sendEmail}>
        <FormControl isRequired>
          <HStack mt="10">
            <Input
              borderColor="#F456F1"
              focusBorderColor="#F456F1"
              placeholder="Name"
              name="from_name"
              type="name"
              value={name}
              onChange={handleNameChange}
            ></Input>
            <Input
              borderColor="#F456F1"
              focusBorderColor="#F456F1"
              placeholder="Email"
              name="user_email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            ></Input>
          </HStack>
          <Input
            borderColor="#F456F1"
            focusBorderColor="#F456F1"
            placeholder="Subject"
            mt="5"
            name="subject"
            type="subject"
            value={subject}
            onChange={handleSubjectChange}
          ></Input>

          <Textarea
            borderColor="#F456F1"
            focusBorderColor="#F456F1"
            placeholder="Message"
            h="150"
            mt="5"
            pt="5"
            name="message"
            type="text"
            value={message}
            onChange={handleMessageChange}
          />
        </FormControl>

        <Box display="flex" justifyContent="center">
          <Button
            variant="fill"
            mt="5"
            type="submit"
            isLoading={submitted}
            loadingText="Submitting"
            value="Send"
          >
            Submit
          </Button>
        </Box>
      </form>
      <Flex mt="5">
        {status === "success" ? (
          <Alert
            status="success"
            bg="none"
            borderColor="#F456F1"
            borderWidth="2px"
          >
            <AlertIcon />
            <AlertTitle mr={2}>Success!</AlertTitle>
            <AlertDescription>Your email has been sent.</AlertDescription>
          </Alert>
        ) : status === "error" ? (
          <Alert
            status="error"
            bg="none"
            borderColor="#F456F1"
            borderWidth="2px"
          >
            <AlertIcon />
            <AlertTitle mr={2}>Error!</AlertTitle>
            <AlertDescription>
              Your email was unable to be sent.
            </AlertDescription>
          </Alert>
        ) : null}
      </Flex>
    </Container>
  );
}

export default Contact;
