all: clean figures
	latexmk -pdf main.tex

clean:
	rm -f *.aux *.bbl *.out *.toc *.blg  *.lof *.lot

reallyclean: clean
	rm -f main.pdf main.dvi

figures:
	make -C figures

.PHONY: figures clean reallyclean
