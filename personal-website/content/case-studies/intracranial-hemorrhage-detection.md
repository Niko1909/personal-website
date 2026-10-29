---
title: "Intracranial Hemorrhage Detection"
subtitle: "Preparing CT images and evaluating a deep-learning baseline with Trillium Health Partners."
slug: "intracranial-hemorrhage-detection"
status: "First implementation authorized; detailed content review deferred by Nikolas on October 26, 2026"
date: "Sep 2023 - Dec 2023"
project_type: "Engineering capstone"
institution: "University of Toronto"
partner: "Trillium Health Partners"
team_size: 5
role: "Data preprocessing and results analysis"
contribution: "I prepared CT images using DICOM preprocessing and CT windowing, analyzed model predictions, and wrote the report’s Discussion. Other team members focused on model research, training, and Docker troubleshooting."
outcome: "On 78,545 public test images, the team’s any-hemorrhage F1 was 0.8520, but epidural sensitivity was only 10.42%. The evaluation revealed a subtype weakness; it did not establish clinical readiness."
featured: false
technologies:
  - Python
  - pydicom
  - Pandas
  - Deep learning
  - Docker
  - AWS EC2
card_title: "Intracranial Hemorrhage Detection"
card_summary: "Worked on CT-image preprocessing and results analysis in a five-person capstone with Trillium Health Partners. Evaluation on 78,545 public test images showed strong overall detection alongside substantial weaknesses in individual hemorrhage subtypes."
card_metrics:
  - value: "78,545"
    label: "public-dataset test images"
  - value: "0.852"
    label: "F1 for any-hemorrhage detection"
---

## Project context

For my University of Toronto capstone, I worked in a five-person team with Trillium Health Partners to establish a deep-learning baseline for determining whether intracranial hemorrhage was present in CT images and identifying its subtype(s): epidural, subdural, subarachnoid, intraparenchymal, and intraventricular. The baseline was intended to support the evaluation of commercial hemorrhage detection and classification systems.

I focused on DICOM preprocessing and results analysis. The team adapted an existing competition solution and evaluated predictions on 78,545 public test images.

## My contribution

I worked on preparing more than 500,000 DICOM images using pydicom and CT windowing, then analyzed model predictions across five hemorrhage subtypes and an overall any-hemorrhage label. I also contributed to the report's Introduction and wrote its Discussion.

Other team members focused on model research, training, and Docker troubleshooting.

## Preparing CT images for the model

Our preprocessing used three CT windows: brain, subdural, and bone. Each emphasizes a different intensity range so the model can receive complementary views of the same slice.

We used pydicom to read the image data and metadata, applied the windows, and combined them into a three-channel image. We could inspect each window separately as well as the combined model input.

The project used the public [RSNA Intracranial Hemorrhage Detection dataset](https://www.rsna.org/artificial-intelligence/ai-image-challenge/rsna-intracranial-hemorrhage-detection-challenge-2019). We did not receive access to the partner's patient data during the capstone.

## Adapting an existing model

The team adapted the [NoBrainer competition solution](https://github.com/darraghdog/rsna), whose architecture combined a ResNeXt101 convolutional network with an LSTM that used information across CT slices.

The implemented training run used downloaded embeddings produced by the original team's pretrained CNN. We trained the LSTM portion rather than retraining the CNN. The team configured the environment in a GPU-enabled Docker container on the partner's AWS EC2 instance and adapted scripts to resolve environment-specific issues.

We did not complete independent CNN training or validate the full pipeline from raw DICOM input through newly generated CNN embeddings to final predictions.

## Evaluating the results

I analyzed predictions on 78,545 test images. For each of the six labels, we classified probabilities above 0.5 as positive and evaluated sensitivity, specificity, F1, and accuracy.

<figure class="metric-comparison" aria-labelledby="comparison-title">
  <figcaption id="comparison-title">High accuracy hid weak epidural detection.</figcaption>
  <p class="metric-note">Image-level results on the public test set. Percentage bars share a 0–100% scale.</p>
  <table>
    <thead><tr><th scope="col">Metric</th><th scope="col">Any hemorrhage</th><th scope="col">Epidural subtype</th></tr></thead>
    <tbody>
      <tr><th scope="row">Accuracy</th><td><strong>96.10%</strong><span class="metric-track" aria-hidden="true"><span style="width:96.10%"></span></span></td><td><strong>99.50%</strong><span class="metric-track" aria-hidden="true"><span style="width:99.50%"></span></span></td></tr>
      <tr><th scope="row">Sensitivity</th><td><strong>81.44%</strong><span class="metric-track" aria-hidden="true"><span style="width:81.44%"></span></span></td><td><strong>10.42%</strong><span class="metric-track" aria-hidden="true"><span style="width:10.42%"></span></span></td></tr>
      <tr><th scope="row">F1 score</th><td>0.8520</td><td>0.1702</td></tr>
    </tbody>
  </table>
</figure>

Any-hemorrhage specificity was 98.44%. These results describe individual image labels; they do not establish performance on hospital data.

The test set contained substantially more negative than positive images. Epidural accuracy reached 99.50% even though sensitivity was only 10.42%, meaning the subtype classifier missed most epidural-positive images. This does not mean the separate any-hemorrhage classifier missed those same images.

The report identified epidural hemorrhage as the least represented subtype in the training set. Looking at sensitivity and F1 alongside accuracy made the weakness visible.

## Limits and further work

The project produced a working environment and a baseline evaluation on public data. It did not establish clinical readiness or complete the intended comparison against a commercial system.

Further work would include completing CNN training and full-pipeline validation, evaluating on appropriately approved partner data, and investigating the weaker subtype results. We also could not make a direct leaderboard comparison: our reported log-loss calculation used a different competition stage and weighting from the published leaderboard results.

## Sources

The numerical results above are reproduced from the team's 2023 capstone final report, Table A1. The links below document the public dataset and the original implementation we adapted.

- [RSNA 2019 challenge and dataset information](https://www.rsna.org/artificial-intelligence/ai-image-challenge/rsna-intracranial-hemorrhage-detection-challenge-2019)
- [NoBrainer's original competition implementation](https://github.com/darraghdog/rsna)
