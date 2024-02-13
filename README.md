# Figures

# What problem this library address
In my respect of making web ui, there are my own terminology to describe
how the ui component should look and feel. It is somewhat different from just using
common terminology referring CSS Declaration.
For example, I want to call z-index as depth or level. With this terminological disparity,
there are some difficulties when apply design scheme to existing web style scheme.  
This library provides predefined design & style declaration and terminology for reusing
design theme and terms over and over.

This library helps reusing style values for all other style applications such as component library,
framework, design tools etc. 

Design scheme or paradigm or pattern is composed of some consistent elements and under certain semantic 
theme. To apply this through a number of projects, I decide to introduce this constant style declaration
for my own style system. 

# Further Objectives
To compose components in fast and predictable way, IoC(Inversion of Control) is required in some situations.
For example, if some components inside of another component featuring layout or structure just follow the container's
rule, it would be very predictable.