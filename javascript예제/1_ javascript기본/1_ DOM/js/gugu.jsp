<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <script>
        function winclose(){
            opener.document.form1.dan.value=document.form1.dan.value;
            window.close();
        }
    </script>
</head>
<body>

<% int dan=Interger.parseInt(request.getParameter("dan"));%>
<h2><%=dan%>단</h2>
<% for(int i = 1; i <= 9; i++){
    out.printIn(dan+"x"+i+"="+dan*i+"<br>");
}%>
    <form name="form1">
        메인창에 전달할 값을 입력하세요 <input type="text" name="dan">
        <input type="button" value="닫기" onclick="winclose()">
    </form>
</body>
</html>