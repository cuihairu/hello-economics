# The mathematical tools of economics: my notes

When I put this part together I did not carve mathematics out into a separate discipline of its own; I worked around one practical question: the models, diagrams, derivations and empirical work that economics uses day to day — which mathematical tool does each one actually depend on?

Where these tools sit relative to the economics subjects, and where the classics and the official data sources are, is gathered in the [knowledge backbone](/knowledge).

## The kinds of problems I ran into

- **What do I do when I cannot even read the symbols in an economics formula?**
  Sets, logic, functions, sequences and summation are where reading symbols starts.
- **I know how to draw the diagram, but not why "marginal", "optimal" and "equilibrium" can be analysed this way.**
  Differentiation, integration, matrices and eigenvalues are used here.
- **I know the theory diagrams, but not how to read data, regressions or empirical studies.**
  Probability theory and statistics are used here.
- **I know static equilibrium, but not how to read a dynamic adjustment process.**
  Limits of sequences, differential equations, eigenvalues and eigenvectors are used here.

## The dependency order between the tools

1. [Sets and logic](/math/集合与逻辑)
   For separating the objects of study, the conditions, the conclusions and the boundaries of the symbols.
2. [Sequences and limits](/math/数列与极限)
   For long-run trends, convergence, steady states and infinite-horizon problems.
3. [Common summation formulas](/math/常见求和公式)
   For adding up many periods — discounting and cumulative quantities.
4. [Foundations of differential calculus](/math/微分学基础)
   For marginal analysis, elasticity analysis and optimisation.
5. [Foundations of integral calculus](/math/积分学基础)
   For accumulating marginal quantities into totals, and turning continuous change back into an overall effect.
6. [Differential equations](/math/微分方程)
   For dynamic paths and stability in continuous time.
7. [Matrices and determinants](/math/矩阵与行列式)
   For simultaneous equations, multi-market and multi-sector systems.
8. [Eigenvalues and eigenvectors](/math/特征值与特征向量)
   For stability, principal directions and second-order properties.
9. [Linear spaces and linear transformations](/math/线性空间与线性变换)
   For putting multi-dimensional variables and their transformations into one framework.
10. [Foundations of probability theory](/math/概率论基础)
    For risk, uncertainty and random outcomes.
11. [Foundations of statistics](/math/统计学基础)
    For describing, testing and regressing on data.
12. [Optimisation methods and their use in economics](/math/最优化方法)
13. [Mathematical foundations and economics applications](/math/西方经济学-数学基础)
    For unifying optimal choice under constraints, present-value discounting and elasticity into one language of differentiation.

## Where these tools do work in economic analysis

**Western economics**
- Demand, supply, utility, cost and firm theory: mainly differentiation and integration.
- General equilibrium and welfare analysis: matrices, linear spaces and the foundations of optimisation.
- Macroeconomic growth and dynamic analysis: limits of sequences, differential equations and eigenvalues.

**International economics**
- Trade models and factor movements: sets, functions and comparative statics.
- Exchange rates and the open-economy macroeconomy: differentiation, matrices and dynamic stability analysis.

**Public finance**
- Tax burden, excess burden, optimal taxation: differentiation, integration and statistics.
- Fiscal multipliers and the budget constraint: summation, sequences and simultaneous equations.

**Money and banking**
- Interest rates, money supply and demand, portfolio choice: differentiation, probability and statistics.
- Financial markets and dynamic adjustment: matrices, eigenvalues and differential equations.

**Econometrics and empirical analysis**
- Probability theory and statistics are the core.
- Matrices, linear spaces and eigenvalues are the basis of regression, least squares and PCA.

## Checking back against western economics: does this foundation cover it?

**Core needs already covered**
- [Demand and supply](/western/需求与供给): functions, equilibrium, elasticity, comparative statics, change in total revenue.
- [Utility theory](/western/效用论): marginal utility, the budget constraint, indifference curves, the marginal rate of substitution, optimal choice.
- [Production and cost theory](/western/生产和成本论): marginal product, marginal cost, isoquants, the marginal rate of technical substitution, cost minimisation.
- [The theory of markets](/western/市场理论): total revenue, marginal revenue, marginal cost, profit maximisation, Cournot equilibrium.
- [General equilibrium and welfare economics](/western/一般均衡论和福利经济学): multiple simultaneous markets, relative prices, MRS/MRTS/MRT, the Pareto conditions.
- [The simple determination of national income](/western/简单国民收入决定理论): the consumption function, the multiplier, simultaneous equilibrium.
- [General equilibrium of the goods and money markets](/western/产品市场和货币市场的一般均衡): discounting, functional relations, solving systems of equations, IS-LM.
- [Economic growth](/western/经济增长): growth rates, the steady state, marginal product, dynamic stability.

**What was only lightly touched before and is now filled in**
- **Constrained optimisation (the Lagrangian):** consumer choice, firm choice and the general equilibrium conditions can all be organised under the multiplier method — see [Optimisation methods and their use in economics](/math/最优化方法).
- **Present value and discounting:** the discounting tools behind marginal efficiency of capital, bond pricing and intertemporal choice are in the "present value and discounting" section of that same chapter.

**Against the goal of "reading this western economics textbook"**
- The mathematics here already covers the main content; for the systematic, well-argued derivations, read [Optimisation methods and their use in economics](/math/最优化方法) directly.

## Looking up a tool from a specific problem

**Goal 1: reading an undergraduate economics textbook**
- Tools you will need: sets and logic, sequences and limits, summation formulas, differentiation, integration.

**Goal 2: analysing macro and dynamic models**
- Tools you will need: sequences and limits, differentiation, differential equations, matrices, eigenvalues.

**Goal 3: working with regressions and data**
- Tools you will need: summation formulas, matrices, probability theory, statistics.

## A few traps I fall into myself

- When I note a formula down I note with it what question in economics it answers, not the formula alone.
- A diagram's intuition is not a proof; many conclusions also depend on limits, derivatives or matrix structure.
- Being able to solve a problem and being able to build a model are two different things; the harder part is judging why a given tool should be used at all.

## References

- Tongji University, *Advanced Mathematics* — the standard treatment of limits, differentiation and integration.
- Tongji University, *Linear Algebra* — the chapter split for matrices, linear spaces and eigenvalues.
- Sheng Zhou, *Probability Theory and Mathematical Statistics* — the chapter split for probability and statistics.
- The full list is in the [bibliography](/reference/参考书目).
- [Wikipedia · Calculus](https://en.wikipedia.org/wiki/Calculus)

<!-- BACKLINKS-AUTO -->
## Related pages

- [about](/about)
