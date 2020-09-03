def unique_in_order(iterable)
    new_arr =[]
    arr_to_be_change = iterable.split(//)
    arr_to_be_change.each do |i|
      if new_arr[i-1]  == i  
      else
      new_arr << i 
      end 
    end
    new_arr    
    
end

p unique_in_order('AAAABBBCCDAABBB')