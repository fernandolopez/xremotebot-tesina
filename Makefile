all: clean figures
	latexmk  -jobname="main-moficando" -pdf main.tex

clean:
	rm -f *.aux *.bbl *.out *.toc *.blg  *.lof *.lot *.fdb_latexmk

reallyclean: clean
	rm -f main.pdf main.dvi

figures:
	make -C figures

.PHONY: figures clean reallyclean
