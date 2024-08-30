### Code Challenge: Race of the Scripts

#### Challenge Overview

In this challenge, you will create a fun and interactive web page to understand how the `async` and `defer` attributes in script tags affect the loading and execution of JavaScript. You will simulate a "race" between scripts to see which one finishes loading first.

#### Challenge Guidelines

1. **Modify `index.html`**:
   - Include `script1.js`, `script2.js`, and `script3.js` in the `<body>` of your HTML file.
   - Experiment with different combinations of `async` and `defer` attributes on these script tags.

2. **Observe the Results**:
   - Open your web page in a browser.
   - Notice the order in which the messages appear in the console and on the web page.

3. **Tasks**:
   - **Task 1**: Load all scripts without `async` or `defer` and observe the order.
   - **Task 2**: Add `async` to all scripts and note the changes.
   - **Task 3**: Use `defer` on all scripts and compare the results.

#### Expected Learning Outcome

- Understanding how `async` and `defer` affect the loading and execution sequence of JavaScript files.

#### Submission

- Submit your modified `index.html` file with the different script tag configurations.
- Include a text file or a comment in your `index.html` explaining the observed behaviour in each task.

#### Solution
Play around with adding all these script tags in the HTML file. Make sure to keep the preview window open so you can see how the scripts are loading. 

1. **Modified HTML File (index.html)**:
   - For Task 1:
     <script src="script1.js"></script>
     <script src="script2.js"></script>
     <script src="script3.js"></script>
     
   - For Task 2:
     <script async src="script1.js"></script>
     <script async src="script2.js"></script>
     <script async src="script3.js"></script>

   - For Task 3:
     <script defer src="script1.js"></script>
     <script defer src="script2.js"></script>
     <script defer src="script3.js"></script>

2. **Observation**:

#### Task 1: Without `async` or `defer`

- **Observation**: The scripts were executed in the order they were included in the HTML file. The web page content (the `<h1>` tag content) was visible before any of the scripts executed. Each script blocked the parsing of the HTML document until it was completely loaded and executed. This resulted in a noticeable delay in rendering the text added by the scripts.

#### Task 2: With `async` Attribute

- **Observation**: The scripts were loaded asynchronously, and their execution order was not guaranteed to match the order in which they appeared in the HTML. I noticed that the scripts executed as soon as they were loaded, which led to a non-deterministic order of execution. The page content was visible almost immediately, but the text from the scripts appeared in a random order, depending on which script loaded first.

#### Task 3: With `defer` Attribute

- **Observation**: Similar to the `async` attribute, the scripts were loaded asynchronously. However, unlike `async`, the scripts executed only after the entire HTML document was parsed. This resulted in the script execution order matching the order in which they appeared in the HTML. The page content was visible without delay, and the text from the scripts appeared after the page was fully loaded, in the order of script1, script2, then script3.

### Summary

- Without `async` or `defer`, scripts block the HTML parsing, leading to potential delays in rendering page content.
- `async` allows for asynchronous loading of scripts but does not guarantee execution order, which can result in unpredictable behavior.
- `defer` also enables asynchronous loading but ensures that scripts execute in the order they are specified in the document and only after the HTML document has been fully parsed, providing a more consistent and predictable loading behavior.