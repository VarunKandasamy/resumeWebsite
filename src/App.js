import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  Grid,
  Link,
  Divider
} from '@mui/material';

function ResumePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
        {/* Header */}
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Varun Kandasamy
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Winchester, MA | <Link href="mailto:varuntheinventor@gmail.com">varuntheinventor@gmail.com</Link> | (617) 417-4091
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <Link href="https://github.com/VarunKandasamy" target="_blank" rel="noopener">GitHub</Link> |
          <Link href="https://www.linkedin.com/in/varun-kandasamy-27a861260/" target="_blank" rel="noopener" sx={{ ml: 1 }}>LinkedIn</Link>
        </Typography>

        {/* Summary */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" fontWeight={600} gutterBottom>Summary</Typography>
        <Typography variant="body1">
          Curious and driven computer science student with strong backend experience in Flask, SQL, and cloud infrastructure. Passionate about creating performant systems and real-world solutions.
        </Typography>

        {/* Education */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" fontWeight={600} gutterBottom>Education</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Santa Clara University — BS in Computer Science & Engineering"
              secondary="Sept 2024 – June 2027 | GPA: 4.0 | Coursework: Advanced Data Structures, Embedded Systems, Networking, Theory of Algorithms"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Worcester Polytechnic Institute — Summer Term"
              secondary="June 2023 – August 2023 | Course: Discrete Mathematics"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Cornell University — Summer Term"
              secondary="June 2022 – August 2022 | GPA: 4.0 | Course: Data Structures and Algorithms (CS 2110)"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Coursera Specializations"
              secondary="Andrew Ng’s Machine Learning, PostgreSQL for Everybody"
            />
          </ListItem>
        </List>

        {/* Projects */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" fontWeight={600} gutterBottom>Projects</Typography>
        <List>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="SchedulD"
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    <Link href="https://github.com/VarunKandasamy/SchedulD" target="_blank" rel="noopener">
                      github.com/VarunKandasamy/SchedulD
                    </Link>
                  </Typography>
                  <ul style={{ marginTop: 8 }}>
                    <li>Architected a Flask-based backend system for a college course planning tool</li>
                    <li>Designed and deployed a normalized PostgreSQL schema hosted on AWS RDS to manage students, courses, departments, and enrollments</li>
                    <li>Leveraged React to build a seamless user experience</li>
                    <li>Tools/Tech Used: SQL, Flask, React, AWS RDS, Fetch API</li>
                  </ul>
                </>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="VarunOS"
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    <Link href="https://github.com/VarunKandasamy/varunOS" target="_blank" rel="noopener">
                      github.com/VarunKandasamy/varunOS
                    </Link>
                  </Typography>
                  <ul style={{ marginTop: 8 }}>
                    <li>Bootstrapped a custom operating system from scratch in x86 assembly, crafting a bootloader that enters protected mode via GDT setup and CPU register manipulation</li>
                    <li>Engineered a raw disk sector loader using BIOS interrupts to load kernel on bare metal</li>
                    <li>Tools Used: x86 Assembly, Makefile, QEMU, NASM</li>
                  </ul>
                </>
              }
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Simba’s Surveillance"
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    <Link href="https://github.com/NickelR22/simbassurveillance" target="_blank" rel="noopener">
                      github.com/NickelR22/simbassurveillance
                    </Link>
                  </Typography>
                  <ul style={{ marginTop: 8 }}>
                    <li>Spearheaded development of a computer vision pipeline utilizing YOLOv5 for object detection and OpenCV for image processing</li>
                    <li>Engineered a Flask backend server to handle real-time uploads, manage detection data, and serve results to a webpage via JSON payloads</li>
                    <li>Implemented custom network module in a C file to optimize network communication</li>
                    <li>Tools Used: C, Python, Flask, YOLOv5, OpenCV</li>
                  </ul>
                </>
              }
            />
          </ListItem>

        </List>

        {/* Experience */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" fontWeight={600} gutterBottom>Experience</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Coding Instructor, CodeWiz — Reading, MA"
              secondary="June 2023 – July 2023 | Taught C# to students and collaborated with instructors to build team-based curriculum."
            />
          </ListItem>
        </List>

        {/* Technologies */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" fontWeight={600} gutterBottom>Technologies</Typography>

        <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 500 }}>Languages</Typography>
        <Grid container spacing={1}>
          {['C++', 'C', 'Rust', 'Java', 'Python', 'JavaScript', 'Assembly (x86, ARM)', 'SQL', 'HTML/CSS'].map(skill => (
            <Grid item key={skill}><Chip label={skill} /></Grid>
          ))}
        </Grid>

        <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 500 }}>Machine Learning & AI</Typography>
        <Grid container spacing={1}>
          {['Tensorflow', 'PyTorch', 'Numpy', 'Pandas', 'Matplotlib', 'Keras', 'YOLO', 'Random Forests', 'Logistic Regression', 'Neural Networks', 'Reinforcement Learning', 'Unsupervised Learning'].map(skill => (
            <Grid item key={skill}><Chip label={skill} /></Grid>
          ))}
        </Grid>

        <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 500 }}>Cloud & Infrastructure</Typography>
        <Grid container spacing={1}>
          {['AWS (RDS, EC2)', 'Google Cloud Run', 'Docker', 'Kubernetes', 'MongoDB'].map(skill => (
            <Grid item key={skill}><Chip label={skill} /></Grid>
          ))}
        </Grid>

        <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 500 }}>Development Tools</Typography>
        <Grid container spacing={1}>
          {['Git', 'JUnit', 'Script Testing', 'CMake'].map(skill => (
            <Grid item key={skill}><Chip label={skill} /></Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default ResumePage;
