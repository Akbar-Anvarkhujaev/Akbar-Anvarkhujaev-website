---
# HOW TO ADD A PROJECT
# 1. Copy this file in the same folder and rename it, e.g. "volatility-forecasting.md".
#    The file name becomes the page address: /projects/volatility-forecasting
# 2. Fill in the fields below. Lines starting with "#" are comments; delete them if you like.
# 3. Save. Files starting with "_" (like this one) are ignored, so this template never shows up.

title: My New Project                       # required
summary: One or two sentences for the project card.   # required
subtitle: The question this project answers (shown under the title on its page)   # optional
metric: "Headline result, e.g. Sharpe 1.1 out-of-sample after costs"               # optional, keep the quotes
features:                                    # optional bullet list on the card
  - First feature
  - Second feature
# image: ../../assets/my-project/preview.png  # optional preview shown on the right of the card
# imageAlt: What the preview shows
tags: [Python, pandas]                       # tools used
status: complete                             # complete | in-progress
order: 10                                    # lower numbers appear first
repo: https://github.com/Akbar-Anvarkhujaev/your-repo   # optional, delete line if none
# demo: https://example.com                  # optional: adds a "Visit website" button
# note: Short italic note under the card     # optional
draft: false                                 # true = hidden from the site
---

Everything below the dashes is the write-up page. Leave it empty if you only want a card.

## Question

What problem were you solving and why does it matter?

## Data and method

Inline math works like $\mu = w^\top r$, and display math like this:

$$
\sigma_p = \sqrt{w^\top \Sigma w}
$$

Images: put them in src/assets/<project-name>/ and reference them like this:
![Description of the chart](../../assets/my-project/chart.png)

## Results

| Strategy | Sharpe |
| --- | ---: |
| Example | 1.00 |

## Takeaways and next steps
