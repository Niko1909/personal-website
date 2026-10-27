---
title: "Intracranial Hemorrhage Detection"
subtitle: "Preparing CT images and evaluating a deep-learning baseline with Trillium Health Partners."
slug: "intracranial-hemorrhage-detection"
status: "First implementation authorized; detailed content review deferred by Nikolas on October 26, 2026"
date: "September to December 2023"
project_type: "Engineering capstone"
institution: "University of Toronto"
partner: "Trillium Health Partners"
team_size: 5
role: "Data preprocessing and results analysis"
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

# Intracranial Hemorrhage Detection

For my University of Toronto capstone, I worked in a five-person team with Trillium Health Partners to establish a deep-learning baseline for detecting hemorrhage in CT images. The intended use was to support the evaluation of commercial systems.

My contribution focused on DICOM preprocessing and results analysis. The team adapted an existing competition solution and evaluated its predictions on 78,545 images from the public RSNA Intracranial Hemorrhage Detection dataset. It achieved an F1 score of 0.852 for detecting any hemorrhage, while the subtype results exposed important weaknesses.

## My contribution

I worked on preparing more than 500,000 DICOM images using pydicom and CT windowing, then analyzed model predictions across five hemorrhage subtypes and an overall any-hemorrhage label. I also contributed to the report's Introduction and wrote its Discussion.

Other team members focused on model research, training, and Docker troubleshooting. My part of the project centred on preparing the data and interpreting what the evaluation showed.

## Preparing CT images for the model

CT images contain intensity information that can be displayed differently depending on the tissue or structure being examined. Our preprocessing used three windows: brain, subdural, and bone. Each window emphasizes a different intensity range.

We used pydicom to read the image data and metadata, applied those windows, and combined the resulting views into a three-channel image for the model pipeline. This made the preprocessing inspectable through separate window images as well as the combined model input.

The project used public RSNA data. We did not receive access to the partner's patient data during the capstone.

## Adapting an existing model

The team based the implementation on the NoBrainer competition solution, whose architecture combined a ResNeXt101 convolutional network with an LSTM that used information across CT slices.

The implemented training run used downloaded embeddings produced by the original team's pretrained CNN. We trained the LSTM portion rather than retraining the CNN. The team configured the environment in a GPU-enabled Docker container on the partner's AWS EC2 instance and adapted scripts to resolve environment-specific issues.

This established an environment for further experimentation. We did not complete independent CNN training or validate the full pipeline from raw DICOM input through newly generated CNN embeddings to final predictions.

## Evaluating the results

I analyzed predictions on 78,545 test images. For each of the six labels, we classified probabilities above 0.5 as positive and evaluated sensitivity, specificity, F1, and accuracy.

For the overall any-hemorrhage label, the report recorded:

| Metric | Result |
| --- | ---: |
| F1 score | 0.8520 |
| Sensitivity | 81.44% |
| Specificity | 98.44% |
| Accuracy | 96.10% |

These are image-level results on the public test set. The overall result does not describe each subtype's performance or establish performance on hospital data.

## Why accuracy needed context

The test set contained substantially more negative than positive images. That made the high accuracy figure insufficient to describe how reliably the model identified positive cases.

Epidural classification illustrated the problem: accuracy was 99.50%, but sensitivity was only 10.42% and F1 was 0.1702. The model could achieve high accuracy while missing most positive examples of that subtype. The report identified epidural hemorrhage as the least represented subtype in the training set.

Reporting the metrics together made those weaknesses visible. The any-hemorrhage F1 of 0.852 is a useful summary, but subtype-level analysis is necessary to understand where the baseline struggled.

## Limits and further work

The project produced a working environment and a baseline evaluation on public data. It did not establish clinical readiness or complete the intended comparison against a commercial system.

Further work would include completing CNN training and full-pipeline validation, evaluating on appropriately approved partner data, and investigating the weaker subtype results. We also could not make a direct leaderboard comparison: our reported log-loss calculation used a different competition stage and weighting from the published leaderboard results.

The main lesson from my evaluation work was how much aggregate results can hide. Looking at sensitivity and F1 alongside accuracy, and examining each label separately, gave a more useful account of the model's strengths and limitations.
