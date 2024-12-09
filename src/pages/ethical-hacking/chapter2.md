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

## Maintain a Vigilant Posture

### Modeling Threats

- Threat modeling helps visualize vulnerabilities within entry points, such as software, networks, and users, so they can be mitigated before resulting in an attack
- A vulnerability analysis looks for potential weaknesses across multiple attack vectors.
- A threat assessment determines the best approach to secure a system against a particular threat.
- Threat modeling looks at external attack vectors to understand how attacks could be executed.
- This is done to gain a well-rounded view of potential threats with the goal of reducing overall risk.

- Let's walk through a simple threat assessment
  - A user opens an email attachment which might contain a threat such as malware
  - Without anything stopping the user, they can open and launch the application, which can lead to a cyber attack.
  - Instead of allowing the user to open the attachment, the file should go through a check process to be quarantined if a threat is detected.
- [Microsoft's Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool) can be used.
- [World's Biggest Data Breaches & Hacks](https://www.informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/)

### Using cyber threat intelligence

- Cyber threat intelligence uses previous threat knowledge and reputation to proactively block malicious attacks on a network.
- The CVE program mission is to identify, define, and catalog publicly disclosed cybersecurity vulnerabilities.
- [Cyber threat intelligence standards](https://www.anomali.com/resources/what-are-stix-taxii) such as STIX and TAXII facilitate the exchange of threat information by specifying data structures and communication protocols.
- STIX is short for Structured Threat Information eXpression, which is a standardized language developed by MITRE and the OASIS Cyber Threat Intelligence (CTI) Technical Committee.
- TAXII is short for Trusted Automated eXchange of Intelligent Information, which defined how the information can be shared via services and message exchanges.
- One of the ways we share this is by using reputation-based detection using intelligence operations.
- Participants contribute to the database, but also benefit from the collective wisdom and information.
- Once an organization agrees to participate, they'll start to monitor and share information.
- Lets step through how this works.
  - If there is an identified event, the system will gather data on the possible threat and send the information to the threat operation center's global reputation servers.
  - They will then update the DB and share the results with the other contributing networks.
- [Cisco Talos](https://talosintelligence.com) is a global security research group that provides threat intelligence.

### Following the threat intelligence lifecycle

- One way to defend against threats is to gather threat activity and turn it into threat intelligence.
- Cyber threat intelligence involves collecting, analyzing, and disseminating information about potential or existing cyber threats, including their capabilities, intentions, and motivations.
- Cyber threat information is just information taken from a number of different sources, which may not be accurate or actionable.
- Cyber threat intelligence is evaluated by professionals and assessed for relevancy and accuracy, and most importantly, it is actionable intelligence.
- The cyber threat intelligence lifecycle consists of the following
  - Identifying the requirements, which involves defining the goals, objectives, and scope
  - Information is then collected, gathering data from various sources, such as open-source intelligence, the dark web, and proprietary websites.
  - The data collected is then processed to identify patterns, anomalies, and other potential indicators of threat activity.
  - Once analysis is complete, intelligence is shared with security operations, incident response teams, or other parties.
  - Based on this intelligence, the team will take appropriate action to mitigate or prevent the threat.
- This is a continuous process to improve security posture and reduce the risk of cyber attacks.

### Managing incidents

- It's critical to move quickly in the case of an incident, as malware can spread rapidly.
- An incident is an unplanned event that disrupts operational or day-to-day activities.
- Incident management is responding to a disruption to information technology services or business processes.
- Managing an incident begins when one is reported and continues until operations have resumed normal activity.
- Some common guidelines include :-
  - Responding to the incident, ask questions to help narrow down the scope.
  - Determine what could have caused the incident and adjust the priority or escalate as required
  - Develop and implement a solution, after running a baseline before and after the changes are made, as well as backing up anything to be changed.
  - Once the solution has been implemented, close the incident, while also allowing for feedback, such as a survey, to ensure it has been resolved.
  - Documentation should be written to clearly identify the problem and include all pertinent facts.
  - The goal is to have a strong incident response team. Remain calm, assign clear roles, work together and communicate frequently.
- Other steps should be taken proactively, such as maintaining security policies and ensuring they are visible and up to date, promptly install security patches and virus updates, and maintain access control lists.

### Hardening guide

- Using the [CISA](https://www.cisa.gov/news-events/news/kaseya-ransomware-attack-guidance-affected-msps-and-their-customers) webpage on the Kaseya Ransomware attack, list the six key guidelines that will help protect network assets and reduce the risk of a successful cyberattack.

1. Conduct a security review to determine if there is a security concern or compromise and implement appropriate mitigation and detection tools for this and other cyber activity
2. Manage supply chain risks
  - Understand the supply chain risks associated with their MSP to include determining network security expectations.
  - Manage risk across their security, legal, and procurement groups.
  - Use risk assessments to identify and prioritize allocation of resources and cyber investment.
3. Implement strong operational controls
  - Create baseline for system and network behavior in order to detect future anomalies; continuously monitor network devices’ security information and event management appliance alerts.
    - Monitor processes for outbound network activity (against baseline).
    - Monitor connections to MSP infrastructure.
  - Regularly update software and operating systems.
  - Integrate system log files—and network monitoring data from MSP infrastructure and systems—into customer intrusion detection and security monitoring systems for independent correlation, aggregation, and detection.
  - Employ a backup solution that automatically and continuously backs up critical data and system configurations. Store backups in an easily retrievable location that is air-gapped from the organizational network.  
  - Require MFA for accessing your systems whenever possible. MFA should be required of all users, but start with privileged, administrative, and remote access users. 
4. Manage architecture risks
  - Review and verify all connections between customer systems, service provider systems, and other client enclaves.
  - Use a dedicated virtual private network (VPN) to connect to MSP infrastructure; all network traffic from the MSP should only traverse this dedicated secure connection.
5. Manage authentication, authorization, and accounting procedures.
  - Adhere to best practices for password and permission management.
  - Ensure MSP accounts are not assigned to administrator groups and restrict those accounts to only systems they manage. Grant access and admin permissions based on need-to-know and least privilege. 
  - Verify service provider accounts in their environment are being used for appropriate purposes and are disabled when not actively being used.
6. Review contractual relationships with all service providers. Ensure contracts include: 
  - Security controls the customer deems appropriate by the client;
  - Appropriate monitoring and logging of provider-managed customer systems;
  - Appropriate monitoring of the service provider’s presence, activities, and connections to the customer network; and
  - Notification of confirmed or suspected security events and incidents occurring on the provider’s infrastructure and administrative networks.
