---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'Ethical Hacking'
pubDate: 2024-12-09
description: 'Introduction to Ethical Hacking'
author: 'IronWill79'
tags: ["hacking", "cybersecurity"]
---
# Ethical Hacking: Introduction to Ethical Hacking

Published on: 2024-12-09

## Protect Data in a Digital World

### Recognizing elements of information security

- Ensuring confidentiality, integrity and availability of data
- Manage risk and protect sensitive information
- Techniques used include access control lists and intrusion detection systems
- Various cryptographic techniques such as hashing, digital certificates and encryption can be used
- Examples of sensitive information include SSNs, CC info, account numbers, financial data, employee records, and trade secrets

#### Confidentiality

- The promise of preventing unauthorized disclosure of sensitive information
- An example of a violation of confidentiality would be a malicious actor gaining access to a server and reading emails
- It is not always clear a breech has occured, so steps should be taken to ensure only authorized agents can access the data.

#### Integrity

- The promise that sensitive information will remain unaltered.
- An example of a violation of integrity would be a student changing their grade in a school's system
- To protect against violations of integrity, network monitoring and strong audit policies should be in place
- Software intrusion detection systems, such as Tripwire, can also be used to monitor checksums.
- To protect integrity, we use access control, backups and hashing.

#### Availability

- The promise that the sensitive information is accessible when required.
- An attack against availability would be a DoS attack, which sends multiple requests to a server to try and overwhelm the system's resources so legitimate queries cannot occur.
- To protect availability, use a layered approach that includes backups, failover systems and disaster recovery plans.

### Providing information assurance

- Information assurance is a comprehensive approach to managing risk and protecting information assets from cyber threats
- A data breach is an incident that compromises some form of PII
- To combat data breaches and cyber attacks, we do the following 
  - Create robust security policies and procedures
  - Monitor and analyse security events
  - Conduct regular risk assessments and implement security controls
  - Perform routine security training and awareness programs
- Due diligence means 'I understand all available methods to protect and secure the data'
- Due care means 'I know what needs to be done and I'm doing it to the best of my ability'
- Even if you do all the things required to secure an organization, the only way you can determine the effectiveness is by conducting an ethical hacking exercise
- Ethical Hacking is a structured methodology that is the due care in assessing an infrastructure's security posture
- Ethical Hacking probes an org's networks, systems and applications to identify weaknesses and recommend appropriate measures

### Defending in depth

- A layered approach at multiple locations can help repel most classes of attacks.
- A layered approach uses three basic elements, technical controls, administrative policies, and people.

#### Technical controls

- These should provide centralized correlation and be tuned to provide early notification
- Some of the devices, tools and techniques include firewalls, spam filters, intrusion detection systems, packet shapers, honeypots, VLANs, NET, and encryption.

#### Administrative policies

- These should include strong security policies that outline appropriate behaviour, hiring policies to properly vet employees, background checks, etc.

#### The people

- Training in security education and awareness should be undertaken, including how to spot and report social engineering attacks, review company policies in acceptable use, physical security and password policies.
- This is done to cultivate security-aware employees that understand their responsibilities in protecting information.

### Using AI and ML in cybersecurity

- AI and ML play a key role in monitoring and managing threats.
- Heuristics based monitoring recognizes general characteristics shared by different types of malware.
- Rule based monitoring recognizes specific behaviour.
- Statistical anomaly detection monitors behaviour that is outside of normal or consistent behaviour.
- User and entity behaviour analytics monitors all points of the network for anomalies and potential threats.

### Adapting to the threats

- An adaptive security strategy provides a proactive approach to securing the data.
- Adaptive security controls are measures that dynamically adjust to changing conditions and threat levels.
- They are designed to be more proactive and flexible than traditional security controls, and fall into one of the following stages:
  - Predict
  - Prevent
  - Detect
  - Respond
  - Recover
- Within each of these stages, we use cyber threat intelligence to modify security controls to better protect against the current threats, vulnerability management, using AI and ML algorithms can scan systems and networks to identify weaknesses and provide recommendations for remediation.

### Leveraging event correlation

- Across a complex network, there may be events happening that relate to the same threat.
- Event correlation along with next generation detection can stop these threats on the network.
- Next generation detection using data mining algorithms can detect patterns that match characteristics of malicious activity, then triggers actions to stop the threat.
- Event correlation is where multiple events are analyzed to identify patterns and correlations among the events on a single host or a complex system.
- Working with next-gen detection capabilities, systems can independently monitor and secure the network, even outside business hours.
