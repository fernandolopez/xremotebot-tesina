all: clean
	latexmk -pdf main.tex

clean:
	rm -f *.aux *.bbl *.out *.toc *.blg  *.lof *.lot main.pdf main.dvi
