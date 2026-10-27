---
title: Theory timeline
layout: page
---

<script setup>
import { TIMELINE_EN as TIMELINE } from './.vitepress/theme/data/timeline-en'
</script>

# Theory timeline

Every economic theory was an answer to a concrete question: Hume wanted to explain why the gold and silver mercantilism had hoarded could not be kept, Keynes wanted to explain why unemployment could persist through the Depression, Lucas wanted to explain why policies engineered from historical data keep failing. This line arranges {{ TIMELINE.length }} nodes in the order in which they appeared, and every node starts by answering "why this moment".

## How to use this line

**Read the density at full zoom.** The default setting compresses 1500 to the present into a single screen — no matter how narrow the window, the whole line still fits, and the nodes simply thin out into short ink strokes; you read the density from how much ink there is. There are no cards at this scale: wherever the nodes crowd together is usually an era in which the same question kept being asked again — the Depression and econometrics in the 1930s, stagflation and rational expectations in the 1970s, the repair of monetary theory after 2008. Conversely, a wide gap is usually not the absence of events but the absence of observable evidence for the argument of the day.

**Zoom in to read the detail.** Switch to "half century", "fifteen years" or "five years", or simply zoom (zooming anchors on the year under the pointer, so which era magnifies is up to your cursor). Once the density is high enough, nodes unfold into cards showing the theory and its author; cards avoid each other by splitting into an upper and a lower lane and never overlap. Where avoidance is genuinely impossible (consecutive blocks such as 1917—1921 or 1933—1941), a card would rather not be printed at all than be hidden — only the still-clickable node remains, and one more notch of zoom spreads the cards apart. The narrower the screen, the more you need to zoom: on a phone, "half century" is still a density map, and the names only appear at "fifteen years".

**Click for the reason behind it.** Clicking a node or a card opens the detail panel below, which gives the question it set out to answer, its representative work, and the corresponding chapter on this site. Often more than one theory sits on the same date, and the panel lists them side by side — which is the most interesting part: 1936 brought both *The General Theory* and the Lange model, one saying the market economy can be trapped by effective demand, the other saying a planning authority can simulate prices by trial and error; the very next year, 1937, Hicks drew the first as IS-LM and Kuznets delivered the national income accounts to Congress. Theory, textbook form and measurement meet in a single year, and only from then on can "stimulus" be written into a budget document.

**Filter first, look second.** The field tags at the top are seven groups — macro, micro, money, public finance, international, socialist, math and method — with counts shown on the tag. Narrow it to a single group and the disagreements inside one period become much easier to see: look at "money" alone and the line runs from the founding of the Bank of England in 1694 (what it invented was "public credit", not a bank) to the same building admitting "loans create deposits" in 2014 — in those three hundred and twenty years the answer to "what is money" changed twice.

**When you need to read through**, the "all nodes by period" section at the bottom of the page is the textual form of the same data: it does not depend on zoom, and it is easy to check entry by entry against the [glossary](/glossary) and the [economists](/people).

## About the data itself

The entries come from the "birth and verification of the theory" sections of each chapter, and the years given are the years in which **the work or the mechanism appeared**, not the years in which it was widely accepted: Coase's 1960 *The Problem of Social Cost* went almost uncited in its own year and only became the foundation of law and economics in the 1970s through Stigler's naming and popularisation; rational expectations was proposed by Muth in 1961 and only truly rewrote the macro models after the Lucas critique of 1976. So what this line marks is the moment "the question was first seriously answered", not the moment "consensus formed" — the latter would need its own line, and it usually lags by fifteen to twenty years.

<TheoryTimeline />

<!-- BACKLINKS-AUTO -->
## Related pages

- [about](/about)
- [Readme](/international/Readme)
- [knowledge](/knowledge)
- [Readme](/monetary/Readme)
- [bibliography](/reference/参考书目)
- [Readme](/western/Readme)
- [Introduction](/western/导言)
